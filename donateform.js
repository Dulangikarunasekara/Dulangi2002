let txtfirstName = document.getElementById("f-name");
let txtlastName = document.getElementById("L-name");
let dntFOrm = document.getElementById("form");
let popUp = document.getElementById("popup");
let msg = document.getElementById("msg-area");
let donations = document.getElementById("donate-amount");
let okBtn = document.getElementById("okbtn");

console.log(txtfirstName)

let firstName;
let lastName;
let donationAmount;

dntFOrm.addEventListener("submit",function(event){
    firstName = txtfirstName.value;
    lastName= txtlastName.value;
    event.preventDefault();
    donationAmount = donations.options[donations.selectedIndex].value;
    msg.innerHTML = `${firstName} ${lastName}, You have donated ${donationAmount} `
    popUp.style.display="block";
    


    

})

okBtn.addEventListener("click",function(){
    popUp.style.display ="none";
})