const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class DeliveryType extends Model{
    static get tableName(){
        return 'DeliveryType'
    }

    static get relationMappings(){
        return {
            Order:{
                relation:Model.HasManyRelation,
                modelClass:Order,
                join:{
                    from:'DeliveryType.DeliveryTypeId',
                    to:'Order.DeliveryTypeId'
                }
            }
        }
    }
}

class PaymentOption extends Model{
    static get tableName(){
        return 'PaymentOption'
    }

    static get relationMappings(){
        return {
            Order:{
                relation:Model.HasManyRelation,
                modelClass:Order,
                join:{
                    from:'PaymentOption.PaymentOptionId',
                    to:'PaymentOption.PaymentOptionId'
                }
            }
        }
    }
}

class Order extends Model{
    static get tableName(){
        return 'Order'
    }

    static get relationMappings(){
        return {
            DeliveryType:{
                relation:Model.BelongsToOneRelation,
                modelClass:DeliveryType,
                join:{
                    from:'Order.DeliveryTypeId',
                    to:'DeliveryType.DeliveryTypeId'
                }
            },
            PaymentOption:{
                relation:Model.BelongsToOneRelation,
                modelClass:PaymentOption,
                join:{
                    from:'Order.PaymentOptionId',
                    to:'PaymentOption.PaymentOptionId'
                }
            },
            OrderDetail:{
                relation:Model.HasManyRelation,
                modelClass:OrderDetail,
                join:{
                    from:'Order.OrderId',
                    to:'OrderDetail.OrderId'
                }
            }
        }
    }
}

class OrderDetail extends Model{
    static get tableName(){
        return 'OrderDetail'
    }

    static get relationMappings(){
        return {
            Order:{
                relation:Model.BelongsToOneRelation,
                modelClass:Order,
                join:{
                    from:'OrderDetail.OrderId',
                    to:'Order.OrderId'
                }
            },
            Menu:{
                relation:Model.BelongsToOneRelation,
                modelClass:Menu,
                join:{
                    from:'OrderDetail.MenuId',
                    to:'Menu.MenuId'
                }
            }
        }
    }
}

module.exports = { DeliveryType, PaymentOption, Order, OrderDetail };