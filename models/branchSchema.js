const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Branch extends Model{
    static get tableName(){
        return 'Branch'
    }

    static get relationMappings(){
        return {
            BranchReview:{
                relation:Model.HasManyRelation,
                modelClass:BranchDetail,
                join:{
                    from:"Branch.BranchId",
                    to:"BranchReview.BranchId"
                }
            },
            Reservation:{
                relation:Model.HasManyRelation,
                modelClass:BranchDetail,
                join:{
                    from:"Branch.BranchId",
                    to:"Reservation.BranchId"
                }
            }
        }
    }
}

class BranchReview extends Model{
    static get tableName(){
        return 'BranchReview'
    }

    static get relationMappings(){
        return {
            Branch:{
                relation:Model.BelongsToOneRelation,
                modelClass:Branch,
                join:{
                    from:"BranchReview.BranchId",
                    to:"Branch.BranchId"
                }
            },
            Customer:{
                relation:Model.BelongsToOneRelation,
                modelClass:Customer,
                join:{
                    from:"BranchReview.CustomerId",
                    to:"Customer.CustomerId"
                }
            }
        }
    }
}

class Reservation extends Model{
    static get tableName(){
        return 'Reservation'
    }

    static get relationMappings(){
        return {
            Branch:{
                relation:Model.BelongsToOneRelation,
                modelClass:Branch,
                join:{
                    from:"Reservation.BranchId",
                    to:"Branch.BranchId"
                }
            },
            Customer:{
                relation:Model.BelongsToOneRelation,
                modelClass:Customer,
                join:{
                    from:"Reservation.CustomerId",
                    to:"Customer.CustomerId"
                }
            }
        }
    }
}

module.exports = { Branch, BranchReview, Reservation };