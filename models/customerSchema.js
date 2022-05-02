const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Customer extends Model{
    static get tableName(){
        return 'Customer'
    }
    
    static get relationMappings(){
        return {
            BranchReview:{
                relation:Model.HasManyRelation,
                modelClass:BranchDetail,
                join:{
                    from:"Customer.CustomerId",
                    to:"BranchReview.CustomerId"
                }
            },
            Reservation:{
                relation:Model.HasManyRelation,
                modelClass:BranchDetail,
                join:{
                    from:"Customer.CustomerId",
                    to:"Reservation.CustomerId"
                }
            },
            TransactionHeader:{
                relation:Model.HasManyRelation,
                modelClass:TransactionHeader,
                join:{
                    from:"Customer.CustomerId",
                    to:"TransactionHeader.CustomerId"
                }
            },
            CustomerDiscount:{
                relation:Model.HasManyRelation,
                modelClass:CustomerDiscount,
                join:{
                    from:"Customer.CustomerId",
                    to:"CustomerDiscount.CustomerId"
                }
            }
        }
    }
}

module.exports = { Customer };