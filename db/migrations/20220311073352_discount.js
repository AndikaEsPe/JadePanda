/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Discount', (table)=>{
    table.increments('DiscountId', {primaryKey:true});
    table.string('PromoName').unique().notNullable();
    table.integer('Percentage').notNullable();
    table.integer('ValidityPeriod').notNullable();
  }).createTable('CustomerDiscount', (table)=>{
    table.integer('CustomerId').references('CustomerId').inTable('Customer');
    table.integer('DiscountId').references('DiscountId').inTable('Discount');
    table.integer('Quantity').notNullable();
    table.date('RedeemDate').notNullable();
    table.primary(['CustomerId', 'DiscountId']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('CustomerDiscount').dropTableIfExists('Discount');
};
