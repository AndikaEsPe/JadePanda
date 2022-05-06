exports.getMenuType = ()=>{
    data = require('fs').readFileSync('../resources/menuType.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        MenuTypeId:parseInt(temp[1]),
        TypeName:temp[2]
      }
    }
    return data.slice(1,-1);
  }
  
exports.getMenu = ()=>{
    data = require('fs').readFileSync('../resources/menu.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        MenuId:parseInt(temp[1]),
        MenuTypeId:parseInt(temp[2]),
        DishName:temp[3],
        Description:temp.slice(4,temp.length-2).join(),
        Price:parseInt(temp[temp.length-2]),
        ImageURL:temp[temp.length-1]
      }
    }
    return data.slice(1,-1);
}

exports.getBranch = ()=>{
    data = require('fs').readFileSync('../resources/branch.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        BranchId:parseInt(temp[1]),
        Address:temp[2],
        ImageURL:temp[3],
        OpenHour:new String(temp[4]).replace('.',':') + ":00",
        CloseHour:new String(temp[5]).replace('.',':') + ":00",
        Phone:temp[6]
      }
    }
    return data.slice(1,-1); 
};

exports.getBranchReview = ()=>{
    data = require('fs').readFileSync('../resources/branchReview.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        ReviewId:parseInt(temp[1]),
        BranchId:parseInt(temp[2]),
        Reviewer:temp[3],
        Rating:parseInt(temp[4]),
        ReviewBody: temp[5]=='' ? null:temp[5]
      }
    }
    return data.slice(1,-1); 
};

exports.getPromotion = ()=>{
    data = require('fs').readFileSync('../resources/promotion.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        PromotionId:parseInt(temp[1]),
        PromoName:temp[2],
        PromoDescription:temp[3],
        ImageURL:temp[4]
      }
    }
    return data.slice(1,-1); 
};

exports.getBranchPromotion = ()=>{
  data = require('fs').readFileSync('../resources/branchPromotion.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        BranchId: parseInt(temp[1]),
        PromotionId:parseInt(temp[2]),
        ValidUntil:temp[3]
      }
    }
    return data.slice(1,-1);
}

exports.getDeliveryType = ()=>{
  data = require('fs').readFileSync('../resources/deliveryType.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        DeliveryTypeId:parseInt(temp[1]),
        DeliveryType:temp[2],
      }
    }
    return data.slice(1,-1); 
}

exports.getPaymentOption = ()=>{
  data = require('fs').readFileSync('../resources/paymentOption.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(';');
      data[i] = {
        PaymentOptionId:parseInt(temp[1]),
        PaymentOption:temp[2],
      }
    }
    return data.slice(1,-1); 
}