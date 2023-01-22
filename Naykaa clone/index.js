data=JSON.parse(localStorage.getItem("data"))||[]
container=document.getElementById("searchdata")
let dataarray=JSON.parse(localStorage.getItem("addtocart"))||[]
console.log(dataarray)
let search=document.querySelector("form")
let value=search.search.value;

search.addEventListener("submit",(e)=>{
    e.preventDefault()
    filtered=data.filter((el)=>{
        if(search.search.value==""){
            return false
        }
       else if((el.prodname.toUpperCase().includes(search.search.value.toUpperCase())==true)||el.brand.toUpperCase().includes(search.search.value.toUpperCase())==true||el.category.toUpperCase().includes(search.search.value.toUpperCase())==true){
            return true
        }else{
            return false
        }
    })
    display(filtered)
    
})

function display(data) {
  
    ///////check
    
    
    
        container.innerHTML="";
        data.forEach((el) => {
        
            let card=document.createElement("div")
            let imge=document.createElement("img")
            imge.setAttribute("src",el.img_url)
            let h2=document.createElement("h6")
            h2.innerText=el.prodname
            let h4=document.createElement("h6");
            h4.innerText=el.brand
            // let h5=document.createElement("h6");
            // h4.innerText=el.category;
            
            let h3=document.createElement("h6");
            h3.innerText="₹"+el.price
            let h3a=document.createElement("h6");
            h3a.innerText="MRP"+" "+"₹"+el.str_price
            h3a.setAttribute("class","cutt")
            let p=document.createElement("h6");
            p.innerText="Enjoy Free Gift"
            let br=document.createElement("br")
            br.innerText=""
            let rat=document.createElement("p")
            rat.setAttribute("class","fa fa-star fa-1x checked")
            let rat2=document.createElement("p")
            rat2.setAttribute("class","fa fa-star fa-1x checked")
            let rat3=document.createElement("p")
            rat3.setAttribute("class","fa fa-star fa-1x checked")
            let rat4=document.createElement("p")
            rat4.setAttribute("class","fa fa-star fa-1x")
            let button=document.createElement("button");
            button.innerText="Add to Card"
            button.addEventListener("click",(product)=>{
                console.log("click")
                if(checkduplicate(el)){
                  alert("product Already Added")
                }else{
                  let element=data.splice(el,1)
                  dataarray.push({...el,quatity:1})
                 localStorage.setItem("addtocart",JSON.stringify(dataarray))
                 
                 alert("product Added")
                 
                }
         
                 
              })
           
    card.append(imge,h2,h4,h3a,h3,p,rat,rat2,rat3,rat4,button)
    container.append(card)
    
        }); 
      

function checkduplicate(product){
    for(let i=0;i<dataarray.length;i++){
      if(dataarray[i].price==product.price){
        return true
      }
      
    }
    return false
  } 
    }
      let name1=document.getElementById("name")
        let reg=   JSON.parse(localStorage.getItem("registerdata"))||[]
        name1.innerText=reg[reg.length-1].name
        console.log("name"+reg[reg.length-1].name)
        let logout=document.getElementById("LogOut")
        logout.addEventListener("click",()=>{
          localStorage.removeItem("registerdata");
          window.location.href="./index.html"
         
        })