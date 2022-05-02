exports.getMenuType = ()=>{
    data = require('fs').readFileSync('../resources/menuType.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
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

exports.getCustomer = ()=>{
    data = require('fs').readFileSync('../resources/customer.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        CustomerId:parseInt(temp[1]),
        FullName:temp[2],
        Email:temp[3],
        Password:temp[4],
        DOB:temp[5],
        Phone:temp[6]
      }
    }
    return data.slice(1,-1); 
};

exports.getBranch = ()=>{
    data = require('fs').readFileSync('../resources/branch.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        BranchId:parseInt(temp[1]),
        Address:temp.slice(2, temp.length-4).join(','),
        ImageURL:temp[temp.length-4],
        OpenHour:new String(temp[temp.length-3]).replace('.',':') + ":00",
        CloseHour:new String(temp[temp.length-2]).replace('.',':') + ":00",
        Phone:temp[temp.length-1]
      }
    }
    return data.slice(1,-1); 
};

exports.getBranchReview = ()=>{
    data = require('fs').readFileSync('../resources/branchReview.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        BranchId:parseInt(temp[1]),
        CustomerId:parseInt(temp[2]),
        Rating:parseInt(temp[3]),
        ReviewBody: temp[4]=='' ? null:temp[4]
      }
    }
    return data.slice(1,-1); 
};

exports.getDiscount = ()=>{
    data = require('fs').readFileSync('../resources/discount.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        DiscountId:parseInt(temp[1]),
        PromoName:temp[2],
        Percentage:parseInt(temp[3]),
        ValidityPeriod:parseInt(temp[4])
      }
    }
    return data.slice(1,-1); 
};

exports.getTransactionHeader = ()=>{
    data = require('fs').readFileSync('../resources/transactionHeader.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        TransactionId:parseInt(temp[1]),
        CustomerId:parseInt(temp[2]),
        DiscountId:temp[3]==''?null:parseInt(temp[3]),
        TransactionDate:new Date(Date.now())
      }
    }
    return data.slice(1,-1); 
};

exports.getTransactionDetail = ()=>{
    data = require('fs').readFileSync('../resources/transactionDetail.csv', 'utf-8')
    data = data.split('\r\n');
    for(let i =0;i<data.length;++i){
      let temp = data[i].split(',');
      data[i] = {
        TransactionId:parseInt(temp[1]),
        MenuId:parseInt(temp[2]),
        Quantity:parseInt(temp[3]),
        ExtraRequest:temp[4]==''?null:temp[4]
      }
    }
    return data.slice(1,-1); 
};