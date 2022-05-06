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
            BranchPromotion:{
                relation:Model.HasManyRelation,
                modelClass:BranchDetail,
                join:{
                    from:"Branch.BranchId",
                    to:"BranchPromotion.BranchId"
                }
            },
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
            }
        }
    }
}

module.exports = { Branch, BranchReview, Reservation };