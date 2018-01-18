# wx-xxw

this is my first wx app

## 项目进度

- 需求 & idea
- 小程序原型 & 设计
- egg.js框架初始化服务端工程
- nodejs平台MVC初探
- MVC到RestfulAPI开发
- crawler爬虫入门
- mysql数据库安装与使用
- 数据库设计
- API开发与调试
- ng-rcs后台管理系统开发
- 小程序开发与对接联调
- 首次部署实践
- 首次上线

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

## DataBase

### ferry_detail

| Name | Description | Type |
| ------ | ------ | ------ |
| ferry_id | 航班号 | `string` |
| ferry_name | 船舶名称 | `string` |
| ferry_startTime | 开船时间 | `dateTime` |
| ferry_state | 航班状态 | `string` |
| ferry_salabilityPassenger | 可售散客 | `string` |
| ferry_salabilityCar | 可配小车 | `string` |
| ferry_salabilityCoach | 可配客车 | `string` |
| ferry_price | 客票票价 | `string` |
