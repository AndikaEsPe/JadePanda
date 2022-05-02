/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('MenuType', (table)=>{
        table.increments('MenuTypeId', {primaryKey:true});
        table.string('TypeName').notNullable().unique();
    }).createTable('Menu', (table)=>{
        table.increments('MenuId', {primaryKey:true});
        table.integer('MenuTypeId').references('MenuTypeId').inTable('MenuType').notNullable();
        table.string('DishName').unique().notNullable();
        table.string('Description', 500).notNullable();
        table.integer('Price').notNullable();
        table.string('ImageURL', 500).unique().notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Menu').dropTableIfExists('MenuType');
};
