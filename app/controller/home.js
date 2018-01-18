'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ferryInfo = await this.ctx.service.crawler.getFerryService();
    this.ctx.body = ferryInfo;
  }
}

module.exports = HomeController;
