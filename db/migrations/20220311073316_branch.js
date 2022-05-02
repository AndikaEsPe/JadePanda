/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Branch',(table)=>{
    table.increments('BranchId',{primaryKey:true});
    table.string('Address',500).unique().notNullable();
    table.string('ImageURL', 500).unique().notNullable();
    table.time('OpenHour').notNullable();
    table.time('CloseHour').notNullable();
    table.string('Phone').unique().notNullable();
  }).createTable('BranchReview', (table)=>{
    table.integer('BranchId').references('BranchId').inTable('Branch');
    table.integer('CustomerId').references('CustomerId').inTable('Customer');
    table.integer('Rating').notNullable();
    table.string('ReviewBody', 500);
    table.primary(['BranchId', 'CustomerId']);
  }).createTable('Reservation', (table)=>{
    table.increments('ReservationId',{primaryKey:true});
    table.integer('BranchId').references('BranchId').inTable('Branch').notNullable();
    table.integer('CustomerId').references('CustomerId').inTable('Customer').notNullable();
    table.date('ReservationDate').notNullable();
    table.time('ReservationTime').notNullable();
    table.string('ExtraRequest', 500);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Reservation')
        .dropTableIfExists('BranchReview')
        .dropTableIfExists('Branch')
};
