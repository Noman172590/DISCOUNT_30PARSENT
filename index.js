

function my_function(){

    var price=document.getElementById('price')
    var mainPrice=price.innerText;
    


    var discount=document.getElementById('discount')
    var totalDiscount=discount.innerText;
    

    var calculation=mainPrice*(totalDiscount/100);
    
    var totalCalculation=mainPrice-calculation
    
    var please_pay=document.getElementById('please_pay')
    please_pay.innerText=totalCalculation;
}



function myFunction(){

    var taka=document.getElementById('taka') //500taka
    var amaountTaka=taka.innerText;

    var discount1=document.getElementById('discount1') //discount 30%
    var totalDiscount1=discount1.innerText

    var payamount=document.getElementById('please1')
    var payamounttotal=payamount.innerText;
    
    
    var input_id=document.getElementById('input_id') //input field
    var inputValue=input_id.value;
   if(inputValue==='DISC30')
   {
       var pay=amaountTaka*(totalDiscount1/100)
       var totalPay=amaountTaka-pay;
       payamount.innerText=totalPay

   }
   else{
            payamount.innerText=amaountTaka
   }
}