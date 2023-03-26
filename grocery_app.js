t item = [
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

for (let i=0; i<item.length; i++){

	  if(item[i].promo===true){
		          item[i]["onPromo"]=(item[i].discount/100)+(item[i].discount*0.1)+item[i].price
		      }else{
			              item[i]["onPromo"]="there's not promotion"
			          }
	    
	    
	    
	    if(item[i].discount>0){
		            item[i]["sum"]=(item[i].discount/100)+item[i].price
		            item[i]["diff"]=item[i].price-(item[i].discount/100)
		        }else{
				        item[i]["sum"]=item[i]["price"]
				        item[i]["diff"]=item[i]["price"]
				    }


	    if(item[i].discount>0){
		          withDiscount += item[i].sum
		        }else{
				      withoutDiscount += item[i].sum
				    }

	    

}

console.log(item);
console.log(withDiscount);
console.log(withoutDiscount);


const basketDiv = document.getElementById("basket");


item.map((item)=> {
	  

	  if(item.promo===true){

		      basketDiv.innerHTML += `<div class="${
			            item.promo && item.discount > 0 ? "red" : "normal" 

			          }">
				          <p>Item: ${item.item}</p>
					          <p>Price: R${item.price}</p>
						          <p>Discount: ${item.discount}%</p>
							          <p>Promo: ${item.promo}</p>
								          <p>Sum: R${item.sum}</p>
									          <p>Difference: R${item.diff}</p>
										          <p>On promo: R${item.onPromo}</p>
											          <hr>
												          <p> 1. If an item has a discount, calculate how much a customer will pay for the item at the till.</p>
													          <p> Answer. This customer will pay R${item.sum} at the till.</p>
														          <hr>
															          <p>2. Calculate the difference in price (or total amount of money) this customer would have paid if he/she had no discound and when he has the discounts.</p>
																          <p> Answer. The customer will pay R${withoutDiscount} if she/he has No discount and he/she will pay  R${withDiscount} if have discount.</p>
																	          <hr>
																		          <p>3. Each and every item which is on promotion attracts an additional 10% discount. calculate how much discount will be applied to the basket.</p>
																			          <p>Answer. The discount will be applied to the basket is R${item.onPromo}</p>
																				          
																					          
																						      </div>`;
		        

		    } else{


			        basketDiv.innerHTML += `<div class="${
					      item.promo && item.discount > 0 ? "red" : "normal" 

					    }">
					            <p>item: ${item.item}</p>
						            <p>Price: R${item.price}</p>
							            <p>Discount: ${item.discount}%</p>
								            <p>Promo: ${item.promo}</p>
									            <p>Sum: R${item.sum}</p>
										            <p>Difference: R${item.diff}</p>
											            <hr>
												            <p> 1. If an item has a discount, calculate how much a customer will pay for the item at the till.</p>
													            <p> Answer. This customer will pay R${item.sum} at the till.</p>
														            <hr>
															            <p>2. Calculate the difference in price (or total amount of money) this customer would have paid if he/she had no discound and when he has the discounts.</p>
																            <p> Answer. The customer will pay R${withoutDiscount} if she/he has No discount and he/she will pay  R${withDiscount} if have discount.</p>
																	            <hr>
																		            <p>3. Each and every item which is on promotion attracts an additional 10% descount. calculate how much discount will be applied to the basket.</p>
																			            <p>Answer. The discount will be applied to the basket ${item.onPromo}</p>
																				            
																					        </div>`;



			      }
	    
})
