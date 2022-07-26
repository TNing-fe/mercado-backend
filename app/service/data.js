const Service = require('egg').Service;

class ListService extends Service {
  // 查询列表
  async list(query) {
    try {
      let list;
      if (Object.keys(query).length !== 0) {
        const tmp = {};
        if (query.category) {
          tmp.category = query.category;
        }
        if (query.org) {
          tmp.org = query.org;
        }
        list = await this.app.mysql.select('data_list', {
          where: tmp,
          orders: [['order']]
        });
      } else {
        list = await this.app.mysql.select('data_list', {
          orders: [['order']]
        });
      }
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 新增导航
  async addItem(info) {
    try {
      const list = await this.app.mysql.insert('data_list', {
        name: info.name,
        order: info.order,
        logo: info.logo,
        url: info.url,
        desc: info.desc,
        org: info.org,
        category: info.category
      });
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 更新导航
  async updateItem(info) {
    try {
      const list = await this.app.mysql.update(
        'data_list',
        {
          name: info.name,
          order: info.order,
          logo: info.logo,
          url: info.url,
          desc: info.desc,
          org: info.org,
          category: info.category
        },
        {
          where: { id: info.id }
        }
      );
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 删除导航项目
  async deleteItem(id) {
    try {
      const list = await this.app.mysql.delete('data_list', {
        id
      });
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 查询分类
  async category(query) {
    try {
      const tmp = {};
      if (query.category) {
        tmp.category = query.category;
      }
      if (query.org) {
        tmp.org = query.org;
      }
      const list = await this.app.mysql.select('category_list', {
        where: tmp,
        orders: [['order']],
      });
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 更新分类
  async updateCategory(info) {
    try {
      const list = await this.app.mysql.update(
        'category_list',
        { name: info.name, order: info.order, org: info.org },
        {
          where: { id: info.id }
        }
      );
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 新增分类
  async addCategory(info) {
    try {
      const list = await this.app.mysql.insert('category_list', {
        name: info.name, order: info.order, org: info.org
      });
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
  // 删除分类
  async deleteCategory(id) {
    try {
      const list = await this.app.mysql.delete('category_list', {
        id
      });
      return list;
    } catch (err) {
      this.ctx.errMsg = err.sqlMessage;
      return null;
    }
  }
}

module.exports = ListService;
