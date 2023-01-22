
async function showProduct() {
    try {
       var res = await fetch("https://nykaa-deployed.onrender.com/products");

  var data = await res.json();
let data2=localStorage.setItem("data2",JSON.stringify(data))
  console.log(data);  
    } catch (error) {
      console.log(error)  
    }
 

  // append(data);
}
showProduct();

