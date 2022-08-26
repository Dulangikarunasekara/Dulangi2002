let cart = document.getElementById("cart");
let overallordersummary =  document.getElementById("overallorder");
let ticketchoices = document.getElementById("ticket");
//let txtcurrent = document.getElementById("current-order");
let form = document.getElementById("form");
let addtofavouritesbtn = document.getElementById("addtofavourites");
let durationchoice = document.getElementById("duration");
let txtnumtickets = document.getElementById("quantity-tickets");
let addtocartbtn = document.getElementById("add-to-cart");
let loyaltypointsbtn = document.getElementById("checkloyalty");
let txtnewtype = document.getElementById("updatetype");
let txtnewquantity = document.getElementById("updateduration");
let txtnewduration = document.getElementById("updatequantity");
let txtnewprice = document.getElementById("updateprice");
let txtoutput = document.getElementById("row");
let orderfavouritebtn =document.getElementById("orderfavourite");
let popup = document.getElementById("popup");
let purchasebtn = document.getElementById("purchase");
let txttoken = document.getElementById("foodtokenquantity");

let closepopup = document.getElementById("okbtn");



//let price = document.getElementById("updateprice");
let cartcost;
let txtcurrentcost;
let typecost;
let durationcost;
let loyaltypoints;
let overallcost;
let overallquantity;
let totalloyaltypoints;























loyaltypointsbtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    console.log("fddfg");
    let overquantity = parseInt(document.getElementById("overallquantity").innerText);
    if(overquantity > 3){
         totalloyaltypoints = (overquantity - 3) *20;
         localStorage.setItem('loyalty-points' ,JSON.stringify(totalloyaltypoints));
         document.getElementById("loyalty-display").innerText += JSON.parse(localStorage.getItem('loyalty-points'));

    }
    else{
        totalloyaltypoints = 0;
        localStorage.setItem('loyalty-points' ,JSON.stringify(totalloyaltypoints));
        document.getElementById("loyalty-display").innerText += JSON.parse(localStorage.getItem('loyalty-points'));

    }

 

});




purchasebtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    if(cart.innerText != "" && document.getElementById("overallquantity").innerText !=0){
    popup.style.display="block";
}}
);

closepopup.addEventListener("click", (evt)=>{
    evt.preventDefault();
    popup.style.display ="none";
});




window.addEventListener('load',init);

function init(){
    console.log("testing");
    current = "";
    cart = "";
    cartcost = 0;
    currentcost = 0.00;
    durationcost =0.00;
    typecost = 0.00;
    overallcost = 0.00;
    overallquantity = 0.00;
    totalloyaltypoints = 0.00;
    foodprice = 0.00;
   


}


durationchoice.addEventListener("change" , checkduration);
ticketchoices.addEventListener("change" , checktype);
txtnumtickets.addEventListener("change" , quantityupdate);
form.addEventListener("change", updateprice);
addtofavouritesbtn.addEventListener("click" , addtofavourites);
orderfavouritebtn.addEventListener("click", orderfavourite);




function addtofavourites(){
    localStorage.setItem('favourites' , JSON.stringify( txtnewquantity.innerText + '  '+ txtnewtype.innerText  +  ' '  + txtnewduration.innerText + ' ' + txtnewprice.innerText));
    localStorage.setItem('favourite type' ,JSON.stringify(txtnewtype.innerText));
    localStorage.setItem('favourite quantity' , JSON.stringify(txtnewduration.innerText));
    localStorage.setItem('favourite duration', JSON.stringify(txtnewquantity.innerText));
    localStorage.setItem('favourite price' ,JSON.stringify(txtnewprice.innerText));


}

  


orderfavouritebtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    document.getElementById("cart").innerText += `\n ${JSON.parse(localStorage.getItem('favourites'))}`;
    document.getElementById("quantity2").innerText += `\n${JSON.parse(localStorage.getItem('favourite quantity'))}`;
    document.getElementById("type2").innerText += `\n${JSON.parse(localStorage.getItem('favourite type'))}`;
    document.getElementById("duraton2").innerText += `\n${JSON.parse(localStorage.getItem('favourite duration'))}`;
    document.getElementById("price2").innerText += `\n${JSON.parse(localStorage.getItem('favourite price'))}`;
    console.log("fsdfs");

    //comment this out
    document.getElementById("overallquantity").innerText = overallquantity;
    overallquantity =  parseInt(JSON.parse(localStorage.getItem('favourite quantity')));
    //comment this out
    document.getElementById("overallquantity").innerText = overallquantity;
    
    //document.getElementById("overallquantity").innerText += parseInt(JSON.parse(localStorage.getItem('favourite quantity'))) ;
    //overallquantity +=parseInt(JSON.parse(localStorage.getItem('favourite quantity')))


    

}
)

























function quantityupdate(){
    document.getElementById("updatequantity").innerText = txtnumtickets.value;
   
}


function updateprice(){
    let numtickets = txtnumtickets.value;
    txtcurrentcost = (typecost * `${numtickets}`) + (durationcost * `${numtickets}`);
    document.getElementById("updateprice").innerText = `${txtcurrentcost}`;
 
}































addtocartbtn.addEventListener("click", (evt)=>{
    evt.preventDefault();




   


    let numtickets = txtnumtickets.value;
  
    let addcost = parseInt(document.getElementById("updateprice").innerText);
    let addthistoquantity = parseInt(document.getElementById("updatequantity").innerText);
    
    
   
  
    txtcurrentcost = (typecost * `${numtickets}`) + (durationcost * `${numtickets}`);
    document.getElementById("cart").innerText =   document.getElementById("cart").innerText +'\n\n' + "order :\xa0\xa0 " + '\n' + `${numtickets}\xa0\xa0\xa0\xa0` + `${ticketchoices.value}` + "\xa0\xa0\xa0tickets " +  '\xa0\xa0\xa0' + '\n\ ' + "duration :" + '\xa0\xa0' + `${durationchoice.value}`+ ' \n' + "price:" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +`${txtcurrentcost}`;
    document.getElementById("quantity2").innerText =  document.getElementById("quantity2").innerText + `\n ${numtickets}` ;
    document.getElementById("type2").innerText = document.getElementById("type2").innerText + `\n${ticketchoices.value}`;
    document.getElementById("duraton2").innerText = document.getElementById("duraton2").innerText + `\n ${durationchoice.value}`;
    document.getElementById("price2").innerText = document.getElementById("price2").innerText +`\n${txtcurrentcost}` ;
     

    document.getElementById("updatetype").innerText = '';
    document.getElementById("updateduration").innerText = '';
    document.getElementById("updatequantity").innerText = '';
    document.getElementById("updateprice").innerText = '';
    durationchoice.value= document.getElementById("blanktwo").value;
    ticketchoices.value = document.getElementById("blank").value;
    txtnumtickets.value = '';


    overallcost += addcost;
    console.log(overallcost);
    document.getElementById("overallcost").innerText = overallcost;
    overallquantity += addthistoquantity;
    //overallquantity = overallquantity + addthistoquantity + parseInt(JSON.parse(localStorage.getItem('favourite quantity')));
    document.getElementById("overallquantity").innerText = overallquantity;
    let numberoffoodtokenspurchased = txttoken.value;
    let foodprice = numberoffoodtokenspurchased * 500.00;
    document.getElementById("purchasedfoodtokenquantity").innerText = numberoffoodtokenspurchased;
    document.getElementById("priceofthepurchasedfoodtokens").innerText = foodprice;
    document.getElementById("overallcostincludingfoodtokens").innerText = foodprice + overallcost;
   

  

  



});
















function checktype(){
    console.log("du;anfi");
    if(ticketchoices.value == "local-adult"){
       typecost = 1000.00;
     
       console.log(typecost);
       document.getElementById("updatetype").innerText = ticketchoices.value;
       document.getElementById("foodtokenquantity").disabled = false;
        document.getElementById("duration").disabled = false;
    }else if(ticketchoices.value =="Foreign-adult"){
        typecost = 5000.00;
       
        console.log(typecost);
        document.getElementById("updatetype").innerText = ticketchoices.value;
        document.getElementById("foodtokenquantity").disabled = false;
        document.getElementById("duration").disabled = false;


    }else if(ticketchoices.value =="Local-child"){
        typecost = 500.00;
       
        console.log(typecost);
        document.getElementById("updatetype").innerText = ticketchoices.value;
        document.getElementById("foodtokenquantity").disabled = false;
        document.getElementById("duration").disabled = false;



    }else if(ticketchoices.value =="Foreign-child"){
        typecost = 2500.00;
        
        console.log(typecost);
        document.getElementById("updatetype").innerText = ticketchoices.value;
        document.getElementById("foodtokenquantity").disabled = false;
        document.getElementById("duration").disabled = false;



    }else if(ticketchoices.value =="Annual-local"){
        typecost = 4500.00;
        
        console.log(typecost);
        document.getElementById("updatetype").innerText = ticketchoices.value;
        document.getElementById("foodtokenquantity").disabled = true;
        document.getElementById("duration").disabled = true;


    }else //(ticketchoices.value == "Annual-Foreign"){
        {
        typecost = 15000.00;
     
        console.log(typecost);
        document.getElementById("updatetype").innerText = ticketchoices.value;
        document.getElementById("foodtokenquantity").disabled = true;
        document.getElementById("duration").disabled = true;


    }};












   
 
  




function checkduration(){
    if( ticketchoices.value == "local-adult" && durationchoice.value == "half-a-day"){
        durationcost =  250.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;
    }else if( ticketchoices.value == "Foreign-adult" && durationchoice.value == "half-a-day"){
        durationcost = 500.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;

    }else if(document.getElementById("Local-child").checked && document.getElementById("half-a-day").checked){
        durationcost = 250.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;
    }else if(document.getElementById("Foreign-child").checked && document.getElementById("half-a-day").checked){
        durationcost = 500.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;    

    }else if(document.getElementById("Foreign-child").checked && document.getElementById("one-day").checked){
        durationcost = 1000.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;

    }else if(document.getElementById("Local-child").checked && document.getElementById("one-day").checked){
        durationcost = 500.00;
        console.log(durationcost)
        document.getElementById("updateduration").innerText = durationchoice.value;
    }else if(document.getElementById("local-adult").checked && document.getElementById("one-day").checked){
        durationcost = 500.00;
        console.log(durationcost);
        document.getElementById("updateduration").innerText = durationchoice.value;
    }else if(document.getElementById("Foreign-adult").checked && document.getElementById("one-day").checked){
        durationcost = 1000.00;
        console.log(durationcost)
        document.getElementById("updateduration").innerText = durationchoice.value;
    }else{
        durationcost = 0.00
        document.getElementById("updateduration").innerText = durationchoice.value;
    }
        
    }    














/*


function checktype(){
    console.log("checktype");

    if(ticketchoices.value == "local-adult"){

tickeCost=7666.00;
ticket="local-adult-pass"


        if(this.checked){
            typecost += 1000.00;
            document.getElementById("updatetype").innerText = ticketchoices.value;
            
        }else{
            typecost -= 1000.00;
            document.getElementById("updatetype").innerText = "";
            

        }

   
       
    } else if(ticketchoices.value == "Foreign-adult"){
        if(this.checked){
            typecost += 5000.00;
            document.getElementById("updatetype").innerText = this.value;
        }else{
            typecost -= 5000.00;
            document.getElementById("updatetype").innerText = "";
        }
       
    }else if(this.value == "Local-child") {
        if(this.checked){
            typecost += 500;
            document.getElementById("updatetype").innerText = this.value;
        }else{
            typecost -= 500;
            document.getElementById("updatetype").innerText = "";
        }
    }else if(this.value =="Foreign-child"){
        if(this.checked){
            typecost += 2500;
            document.getElementById("updatetype").innerText = this.value;
        }else{
            typecost -= 2500;
            document.getElementById("updatetype").innerText = "";
        }
  
   
    }else if(this.value == "Annual-local"){
        if(this.checked){
            typecost += 4500;
            document.getElementById("updatetype").innerText = this.value;
            document.getElementById("three-hours").disabled = true;
            document.getElementById("half-a-day").disabled = true;
            document.getElementById("one-day").disabled = true;
            document.getElementById("two-days").disabled = true;

        }else{
            typecost -= 4500;
            document.getElementById("updatetype").innerText = "";
            document.getElementById("three-hours").disabled = false;
            document.getElementById("half-a-day").disabled =false ;
            document.getElementById("one-day").disabled = false;
            document.getElementById("two-days").disabled = false;
        }
    }else{
        if(this.checked){
            typecost +=15000;
            document.getElementById("updatetype").innerText = this.value;
            document.getElementById("three-hours").disabled = true;
            document.getElementById("half-a-day").disabled = true;
            document.getElementById("one-day").disabled = true;
            document.getElementById("two-days").disabled = true;

        }else{
            typecost -= 15000;
            document.getElementById("updatetype").innerText = "";
            document.getElementById("three-hours").disabled = false;
            document.getElementById("half-a-day").disabled =false ;
            document.getElementById("one-day").disabled = false;
            document.getElementById("two-days").disabled = false;
        }
    }

   
    
    //typecost.innerHTML = (typecost.toFixed(2));
    console.log(typecost);
   
   }


*/
