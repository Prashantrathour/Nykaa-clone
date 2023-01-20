let enterdata=JSON.parse(localStorage.getItem("registerdata"))||[]
let getdata=JSON.parse(localStorage.getItem("paymentdata"))||[]
let formdata=document.querySelector("form")
formdata.name.value=enterdata[0].name
formdata.mobile.value=enterdata[0].mobile
formdata.email.value=enterdata[0].email
formdata.addEventListener("submit",(el)=>{
    el.preventDefault(); 

    object={
     name:formdata.name.value,
     mobile:formdata.mobile.value,
     email:formdata.email.value,
     address:formdata.address.value,
     pincode:formdata.pin.value,
    
    }
     enterdata.push(object)
     alert("Your Order Placed")
     
  localStorage.setItem("paymentdata",JSON.stringify(enterdata))
  window.location.href="./index.html"
 })
console.log(enterdata)