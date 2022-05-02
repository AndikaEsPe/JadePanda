const reader = require('../csv-reader');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) =>{
  // Deletes ALL existing entries
  await knex('TransactionDetail').del();
  await knex('TransactionHeader').del();
  await knex('Discount').del();
  await knex('BranchReview').del();
  await knex('Branch').del();
  await knex('Customer').del();
  await knex('Menu').del();
  await knex('MenuType').del();
  await knex('MenuType').insert(reader.getMenuType());
  await knex('Menu').insert(reader.getMenu());
  await knex('Customer').insert(reader.getCustomer());
  await knex('Branch').insert(reader.getBranch());
  await knex('BranchReview').insert(reader.getBranchReview());
  await knex('Discount').insert(reader.getDiscount());
  await knex('TransactionHeader').insert(reader.getTransactionHeader());
  await knex('TransactionDetail').insert(reader.getTransactionDetail());
};
