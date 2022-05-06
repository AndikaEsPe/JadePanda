const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class MenuType extends Model{
    static get tableName(){
        return 'MenuType'
    }

    static get relationMappings(){
        return{
            Menu:{
                relation:Model.HasManyRelation,
                modelClass:Menu,
                join: {
                    from:'MenuType.MenuTypeId',
                    to:'Menu.MenuTypeId'
                }
            }
        }
    }
}

class Menu extends Model{
    static get tableName(){
        return 'Menu'
    }

    static get relationMappings(){
        return{
            MenuType:{
                relation:Model.BelongsToOneRelation,
                modelClass:MenuType,
                join: {
                    from:'Menu.MenuTypeId',
                    to:'MenuType.MenuTypeId'
                }
            },
            OrderDetail:{
                relation:Model.HasManyRelation,
                modelClass:OrderDetail,
                join:{
                    from:'Menu.MenuId',
                    to:'OrderDetail.MenuId'
                }
            }
        }
    }
}

module.exports = { Menu, MenuType };