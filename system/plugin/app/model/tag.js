const { DataTypes } = require('sequelize');
const { INTEGER, BIGINT, STRING, TEXT } = DataTypes;

/**
 * 标签表
 */
module.exports = function () {
  return {
    name: 'na_tag',
    structure: {
      id: { type: INTEGER, primaryKey: true, unique: true, autoIncrement: true, comment: '用户的ID' },
      name: { type: STRING(250), allowNull: false, comment: '标签名称' },
      count: { type: INTEGER, allowNull: false, defaultValue: 0, comment: '标签被引用次数' },
      meta: { type: TEXT, defaultValue: '{}', comment: '网页meta信息'},
      template: { type: STRING(200), defaultValue: 'post', comment: '所使用的模板名称' },
      create_time: { type: BIGINT(20), allowNull: false, defaultValue: 0, comment: '数据创建时间' },
      update_time: { type: BIGINT(20), allowNull: false, defaultValue: 0, comment: '数据更新时间' }
    }
  };
};
