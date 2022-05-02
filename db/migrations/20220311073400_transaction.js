/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('TransactionHeader', (table)=>{
    table.increments('TransactionId', {primaryKey:true});
    table.integer('CustomerId').references('CustomerId').inTable('Customer').notNullable();
    table.integer('DiscountId').references('DiscountId').inTable('Discount');
    table.date('TransactionDate').notNullable()
  }).createTable('TransactionDetail', (table)=>{
    table.integer('TransactionId').references('TransactionId').inTable('TransactionHeader');
    table.integer('MenuId').references('MenuId').inTable('Menu');
    table.integer('Quantity').notNullable();
    table.string('ExtraRequest', 500);
    table.primary(['TransactionId','MenuId']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('TransactionDetail').dropTableIfExists('TransactionHeader');
};
