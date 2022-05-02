const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Discount extends Model{
    static get tableName(){
        return 'Discount'
    }

    static get relationMappings(){
        return {
            CustomerDiscount:{
                relation:Model.HasManyRelation,
                modelClass:CustomerDiscount,
                join:{
                    from:'Discount.DiscountId',
                    to:'CustomerDiscount.DiscountId'
                }
            },
            TransactionHeader:{
                relation:Model.HasManyRelation,
                modelClass:TransactionHeader,
                join:{
                    from:'Discount.DiscountId',
                    to:'TransactionHeader.DiscountId'
                }
            }
        }
    }
}

class CustomerDiscount extends Model{
    static get tableName(){
        return 'CustomerDiscount'
    }
    
    static get relationMappings(){
        return {
            Customer:{
                relation:Model.BelongsToOneRelation,
                modelClass:Customer,
                join:{
                    from:'CustomerDiscount.CustomerId',
                    to:'Customer.CustomerId'
                }
            },
            Discount:{
                relation:Model.BelongsToOneRelation,
                modelClass:Discount,
                join:{
                    from:'CustomerDiscount.DiscountId',
                    to:'Discount.DiscountId'
                }
            }
        }
    }
}

module.exports = { Discount, CustomerDiscount };