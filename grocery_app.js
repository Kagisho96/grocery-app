
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
        item[i]["priceDiscounted"]= "No discount"
    }


    if(item[i].discount>0){
      withDiscount += item[i].price
    }else{
      withoutDiscount += item[i].price
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
        <hr>
        <p>Item: ${item.item}</p>
        <p>Price: R${item.price}</p>
        <p>Discount: ${item.discount}%</p>
        <p>Promo: ${item.promo}</p>
        <p>Price discounted: ${item.priceDiscounted}</p>
        <p>Sum with discount: R${withDiscount}</p>
        <p>Sum without discount: R${withoutDiscount}</p>
        <p>Discount applied: ${discountOnBasket}%</p>
        <hr>
        
    </div>`;
    
});
