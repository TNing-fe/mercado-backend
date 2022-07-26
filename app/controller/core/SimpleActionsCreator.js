class SimpleActionsCreator {
  constructor(controller, {
    payloadField, tableNames, updatedAtField
  }) {
    this.controller = controller;
    this.ctx = controller.ctx;
    this.app = controller.app;
    this.payloadField = payloadField;
    this.updatedAtField = updatedAtField;
    this.tableNames = tableNames;
  }

  getParamWithAssert(name) {
    const value = this.ctx.params[name];
    if (typeof value === 'undefined' || value === null) {
      this.ctx.throw(`missing params ${name}`);
    }
    return value;
  }

  getRequestBodyWithAssert(name) {
    const data = this.ctx.request.body[name];
    if (!data) {
      this.ctx.throw(`missing request body ${name}`);
    }
    return data;
  }

  async get(transformer = (v => v)) {
    const id = this.getParamWithAssert('id');
    const record = await this.app.mysql.get(this.tableNames, { id });
    this.controller.success(transformer(record));
  }

  async update() {
    const id = this.getParamWithAssert('id');
    const data = this.getRequestBodyWithAssert(this.payloadField);

    const extra = { id };
    if (this.updatedAtField) {
      extra[this.updatedAtField] = new Date();
    }

    const res = await this.app.mysql.update(this.tableNames, {
      ...data,
      ...extra
    });

    if (res.affectedRows === 1) {
      this.controller.success();
    } else {
      this.controller.fail('update fail');
    }
  }

  async create() {
    const data = this.getRequestBodyWithAssert(this.payloadField);
    const res = await this.app.mysql.insert(this.tableNames, data);
    if (res.affectedRows === 1) {
      this.controller.success(res.insertId);
    } else {
      this.controller.fail('update fail');
    }
  }

  async delete() {
    const id = this.getParamWithAssert('id');
    const res = await this.app.mysql.delete(this.tableNames, { id });
    if (res.affectedRows === 1) {
      this.controller.success();
    } else {
      this.controller.fail('delete error');
    }
  }
}

module.exports = SimpleActionsCreator;
