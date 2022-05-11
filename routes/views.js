const express = require('express');
const { Branch } = require("../models/branchSchema");
const { Menu } = require('../models/menuSchema');
const { Promotion } = require("../models/promotionSchema");

const views = express.Router();

views.get('/menu', async (req, res)=>{
    const menu = await Menu.query().
        join("MenuType", "Menu.MenuTypeId", "=", "MenuType.MenuTypeId").
        select("Menu.*", "MenuType.TypeName");    
    res.json(menu);
});

views.get('/branch', async (req, res)=>{
    const branches = await Branch.query();
    res.json(branches);
})

views.get('/promotion', async (req,res)=>{
    const promotions = await Promotion.query().
        join("BranchPromotion", "BranchPromotion.PromotionId", "=", "Promotion.PromotionId").
        join("Branch", "Branch.BranchId", "=", "BranchPromotion.BranchId").
        select("Promotion.*", "BranchPromotion.ValidUntil", "Branch.Address");
    res.json(promotions);
});

module.exports = views;