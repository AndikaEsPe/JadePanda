require('dotenv').config({path:".env"});
const express = require('express');
const { Branch } = require("../models/branchSchema");
const { Menu } = require('../models/menuSchema');
const { Promotion } = require("../models/promotionSchema");

const app = express();
const port = process.env.PORT || 5000 ;

app.get('/api/menu', async (req, res)=>{
    const menu = await Menu.query().
        join("MenuType", "Menu.MenuTypeId", "=", "MenuType.MenuTypeId").
        select("Menu.*", "MenuType.TypeName");    
    res.json(menu);
});

app.get('/api/branch', async (req, res)=>{
    const branches = await Branch.query();
    res.json(branches);
})

app.get('/api/promotion', async (req,res)=>{
    const promotions = await Promotion.query().
        join("BranchPromotion", "BranchPromotion.PromotionId", "=", "Promotion.PromotionId").
        join("Branch", "Branch.BranchId", "=", "BranchPromotion.BranchId").
        select("Promotion.*", "BranchPromotion.ValidUntil", "Branch.Address");
    res.json(promotions);
})

app.listen(port, ()=>{
    console.log('Server listening at port ' + port);
});