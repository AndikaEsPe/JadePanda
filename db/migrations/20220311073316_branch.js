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
    table.integer("Capacity").notNullable();
    table.float("Latitude").notNullable();
    table.float("Longitude").notNullable();
  }).createTable('BranchReview', (table)=>{
    table.increments("ReviewId", {primaryKey:true});
    table.integer('BranchId').references('BranchId').inTable('Branch');
    table.string("Reviewer", 255).notNullable();
    table.integer('Rating').notNullable();
    table.string('ReviewBody', 500);
  }).createTable('Reservation', (table)=>{
    table.increments('ReservationId',{primaryKey:true});
    table.integer('BranchId').references('BranchId').inTable('Branch').notNullable();
    table.string("FullName", 255).notNullable();
    table.string("Email", 255).unique().notNullable();
    table.string("Phone", 20).notNullable();
    table.integer("NumberOfGuests").notNullable();
    table.datetime('ReservationDate').notNullable();
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
