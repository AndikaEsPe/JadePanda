const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class TransactionHeader extends Model{
    static get tableName(){
        return 'TransactionHeader'
    }

    static get relationMappings(){
        return {
            Customer:{
                relation:Model.BelongsToOneRelation,
                modelClass:Customer,
                join:{
                    from:'TransactionHeader.CustomerId',
                    to:'Customer.CustomerId'
                }
            },
            Discount:{
                relation:Model.BelongsToOneRelation,
                modelClass:Discount,
                join:{
                    from:'TransactionHeader.DiscountId',
                    to:'Discount.DiscountId'
                }
            },
            TransactionDetail:{
                relation:Model.HasManyRelation,
                modelClass:TransactionDetail,
                join:{
                    from:'TransactionHeader.TransactionId',
                    to:'TransactionDetail.TransactionId'
                }
            }
        }
    }
}

class TransactionDetail extends Model{
    static get tableName(){
        return 'TransactionDetail'
    }

    static get relationMappings(){
        return {
            TransactionHeader:{
                relation:Model.BelongsToOneRelation,
                modelClass:TransactionHeader,
                join:{
                    from:'TransactionDetail.TransactionId',
                    to:'TransactionHeader.TransactionId'
                }
            },
            Menu:{
                relation:Model.BelongsToOneRelation,
                modelClass:Menu,
                join:{
                    from:'TransactionDetail.MenuId',
                    to:'Menu.MenuId'
                }
            }
        }
    }
}

module.exports = { TransactionHeader, TransactionDetail };