/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Customer', (table)=>{
    table.increments('CustomerId').primary();
    table.string('FullName').unique().notNullable();
    table.string('Email').unique().notNullable();
    table.string('Password').notNullable();
    table.date('DOB');
    table.string('Phone');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Customer');
};
