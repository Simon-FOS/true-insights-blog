'use strict';
const { Model } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  Blog.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Blog',
    tableName: 'blogs',
  });

  // Automatically generate slug from title
  SequelizeSlugify.slugifyModel(Blog, {
    source: ['title']
  });

  return Blog;
};
