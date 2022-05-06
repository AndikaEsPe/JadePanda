const Knex = require('knex');
const connection = require('../db/knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Promotion extends Model{
    static get tableName(){
        return 'Promotion'
    }

    static get relationMappings(){
        return {
            BranchPromotion:{
                relation:Model.HasManyRelation,
                modelClass:BranchPromotion,
                join:{
                    from:'Promotion.PromotionId',
                    to:'BranchPromotion.PromotionId'
                }
            }
        }
    }
}

class BranchPromotion extends Model{
    static get tableName(){
        return 'BranchPromotion'
    }
    
    static get relationMappings(){
        return {
            Branch:{
                relation:Model.BelongsToOneRelation,
                modelClass:Branch,
                join:{
                    from:'BranchPromotion.BranchId',
                    to:'Branch.BranchId'
                }
            },
            Promotion:{
                relation:Model.BelongsToOneRelation,
                modelClass:Promotion,
                join:{
                    from:'BranchPromotion.PromotionId',
                    to:'Promotion.PromotionId'
                }
            }
        }
    }
}

module.exports = { Promotion, BranchPromotion };