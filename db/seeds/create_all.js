const reader = require('../csv-reader');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) =>{
  await knex("BranchPromotion").del();
  await knex('BranchReview').del();
  await knex('Branch').del();
  await knex("Promotion").del();
  await knex("PaymentOption").del();
  await knex("DeliveryType").del();
  await knex('Menu').del();
  await knex("MenuType").del();
  await knex('MenuType').insert(reader.getMenuType());
  await knex('Menu').insert(reader.getMenu());
  await knex("DeliveryType").insert(reader.getDeliveryType());
  await knex("PaymentOption").insert(reader.getPaymentOption());
  await knex("Promotion").insert(reader.getPromotion());
  await knex('Branch').insert(reader.getBranch());
  await knex('BranchReview').insert(reader.getBranchReview());
  await knex("BranchPromotion").insert(reader.getBranchPromotion());
};
