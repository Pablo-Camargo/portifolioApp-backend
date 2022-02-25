"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models =[];

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.connection = new (0, _sequelize2.default)(_database2.default);
    models.map((model) => model.init(this.connection))
          .map((model) => model.associate && model.associate(this.connection.models)
          )
  }

}
exports. default = new Database();