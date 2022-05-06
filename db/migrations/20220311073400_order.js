/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('DeliveryType', (table)=>{
    table.increments("DeliveryTypeId", {primaryKey:true});
    table.string("DeliveryType", 255).unique().notNullable();
  }).createTable('PaymentOption',(table)=>{
    table.increments("PaymentOptionId", {primaryKey:true});
    table.string("PaymentOption", 255).unique().notNullable();
  }).createTable('Order', (table)=>{
    table.increments('OrderId', {primaryKey:true});
    table.integer("DeliveryTypeId").references("DeliveryTypeId").inTable("DeliveryType");
    table.integer("PaymentOptionId").references("PaymentOptionId").inTable("PaymentOption");
    table.datetime('OrderDate').notNullable();
    table.integer("ExtraFee").notNullable();
    table.string("Address", 500);
  }).createTable('OrderDetail', (table)=>{
    table.integer('OrderId').references('OrderId').inTable('Order');
    table.integer('MenuId').references('MenuId').inTable('Menu');
    table.integer('Quantity').notNullable();
    table.string('ExtraRequest', 500);
    table.primary(['OrderId','MenuId']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('TransactionDetail').dropTableIfExists('TransactionHeader');
};
