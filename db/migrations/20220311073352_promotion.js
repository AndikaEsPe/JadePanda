/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Promotion', (table)=>{
    table.increments('PromotionId', {primaryKey:true});
    table.string('PromoName', 255).unique().notNullable();
    table.string("PromoDescription", 500).unique().notNullable();
    table.string("ImageURL", 500).unique().notNullable();
  }).createTable('BranchPromotion', (table)=>{
    table.integer("BranchId").references("BranchId").inTable("Branch");
    table.integer('PromotionId').references('PromotionId').inTable('Promotion');
    table.date('ValidUntil').notNullable();
    table.primary(['BranchId','PromotionId']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('BranchPromotion').dropTableIfExists('Promotion');
};
