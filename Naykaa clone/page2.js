
let home=document.getElementById("home")
home.addEventListener("click",(e)=>{
      e.preventDefault()
      window.location.href="./index.html"
})

var data1= JSON.parse(localStorage.getItem("data"))

let sort=document.getElementById("sort");
let parent=document.getElementById("cont")
function sortproduct(data){
  sort.addEventListener("change",((e)=>{
    
    
    e.preventDefault()
    if(sort.value=="1"){
      display(data1)
     
    
      

    }else if(sort.value=="pricelowtohigh"){
      filtered=data.sort((a,b)=>{
        return a.price-b.price
      })
      display(filtered)
      
    }
    else if(sort.value=="pricehightolow"){
      filtered=data.sort((a,b)=>{
        return b.price-a.price
      })
      display(filtered)
      
    }else if(sort.value=="name"){
      filtered=data.sort((a,b)=>{if(a.brand >b.brand) return 1 })
      filtered=data.sort((a,b)=>{if(a.brand <b.brand) return -1 })
      display(filtered)
    }
  }))
}
sortproduct(data1)
let dataarray=JSON.parse(localStorage.getItem("addtocart"))||[]
  ////
  console.log("data",dataarray)
let container=document.getElementById("cont")


//////
let search=document.querySelector("form")

search.addEventListener("submit",(e)=>{
  e.preventDefault();
valuesearch=search.search.value;
let filtered=data1.filter((el)=>{
  if(( el.brand.toUpperCase().includes(valuesearch.toUpperCase()) ===true)||(( el.prodname.toUpperCase().includes(valuesearch.toUpperCase()) ===true))){
     return true 
  }else{
      return false
  }
 
      
})
display(filtered)
total=document.querySelector(".count")
total.innerText=filtered.length
console.log(valuesearch)
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
          if(checkduplicate(el)){
            alert("product Already Added")
          }else{
            // let element=data.splice(el,1)
            dataarray.push({...el,quatity:1})
           localStorage.setItem("addtocart",JSON.stringify(dataarray))
           
           alert("product Added")
          //  window.location.href="./cart.html"
          }
   
          display(data) 
        })
       
card.append(imge,h2,h4,h3a,h3,p,rat,rat2,rat3,rat4,button)
container.append(card)

    });  

// checl duplicate

function checkduplicate(product){
  for(let i=0;i<dataarray.length;i++){





    console.log(dataarray[i].price,product.price)
    if(dataarray[i].price==product.price){
      return true
    }
    
  }
  return false
}
}

display(data1)





 

  imageslide=["https://images-static.nykaa.com/uploads/fe975d47-3792-4599-978f-ee185ef9f114.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/fe975d47-3792-4599-978f-ee185ef9f114.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/67dc1a42-52d5-4f03-b7eb-ce1e35bf6594.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/93c65307-10fd-489a-9fe3-2cf86df3f037.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/93c65307-10fd-489a-9fe3-2cf86df3f037.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/381bc88c-1637-49da-9004-eda6690cf3f1.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/fe975d47-3792-4599-978f-ee185ef9f114.jpg?tr=w-1200,cm-pad_resize",]
  let count=0;
  let facebanner=document.getElementById("facebanner");
  img=document.createElement("img")
  facebanner.append(img)
  total=document.querySelector(".count")
  total.innerText=data1.length
  setInterval(() => {
    if(count==imageslide.length){
      count=0
    }
    img.setAttribute("src",imageslide[count])
    count++;
  }, 1000);

  

   


   
