

const item = [
  {
    promo: true,
    discount: 1,
    price: 30,
    item: "bread"
  },

   {
    promo: false,
    discount: 0,
    price: 200,
    item:"rice"
  },

   {
    promo: false,
    discount: 5,
    price: 340,
    item: "meat"
  },

   {
    promo: true,
    discount: 15,
    price: 340,
    item: "brai"
  },

   {
    promo: true,
    discount: 0,
    price: 140,
    item: "chicken"
  },

   {
    promo: false,
    discount: 5,
    price: 100,
    item: "soap"
  },

   {
    promo: true,
    discount: 2,
    price: 70,
    item: "cremora"
  },

   {
    promo: false,
    discount: 0,
    price: 80,
    item:"milk"
  },
   {
    promo: true,
    discount: 0,
    price: 200,
    item: "bin"
  },
   {
    promo: false,
    discount: 3,
    price: 100,
    item: "bin_plastic" 
  },
   {
    promo: true,
    discount: 2,
    price: 75,
    item: "cerelac"
  },
];

withDiscount = 0
withoutDiscount = 0
discountOnBasket = 0

for (let i=0; i<item.length; i++){

  if(item[i].promo===true){
        item[i]["onPromo"]=(item[i].discount/100)+(0.1)
    }else{
        item[i]["onPromo"]="there's not promotion"
    }
    
    
    
    if(item[i].discount>0){
        item[i]["priceDiscounted"]=item[i].price-(item[i].discount/100)
    }else{
        item[i]["sum"]= item[i]["price"]
    }


    if(item[i].discount>0){
      withDiscount += item[i].sum
    }else{
      withoutDiscount += item[i].sum
    }

    if(item[i].promo===true){
      discountOnBasket += item[i].onPromo*100
  }else{
      item[i]["onPromo"]="There's not promotion"
  }

    

}

console.log(item);
console.log(withDiscount);
console.log(withoutDiscount);
console.log(discountOnBasket);



const basketDiv = document.getElementById("basket");


item.map((item)=> {

    basketDiv.innerHTML += `<div class="${
      item.promo && item.discount > 0 ? "red" : "normal" 

    }">
        <p>Item: ${item.item}</p>
        <p>Price: R${item.price}</p>
        <p>Discount: ${item.discount}%</p>
        <p>Promo: ${item.promo}</p>
        <p>Price discounted: R${item.priceDiscounted}</p>
        <p>On promo: ${item.onPromo}</p>
        <hr>
        <p> 1. If an item has a discount, calculate how much a customer will pay for the item at the till.</p>
        <p> Answer. This customer will pay R${item.sum} at the till.</p>
        <hr>
        <p>2. Calculate the difference in price (or total amount of money) this customer would have paid if he/she had no discound and when he has the discounts.</p>
         <p> Answer. The customer will pay R${withoutDiscount} if she/he has No discount and he/she will pay  R${withDiscount} if have discount.</p>
        <hr>
        <p>3. Each and every item which is on promotion attracts an additional 10% discount. calculate how much discount will be applied to the basket.</p>
        <p>Answer. The discount will be applied to the basket is ${discountOnBasket}%</p>
        
        
    </div>`;
    
})


// var diffSum =item.reduce(function(Value1,Value2){
//   return {
//     totalAmount: Value1["item"][i]["diff"] + Value2["item"][i]["diff"] 
//   }

// });

