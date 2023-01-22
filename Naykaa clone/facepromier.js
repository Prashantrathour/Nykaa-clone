
let home=document.getElementById("home")
home.addEventListener("click",(e)=>{
      e.preventDefault()
      window.location.href="./index.html"
})

var data1= [
    //   makeup revolution / face / face primer
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Hot Shot Kombucha Kiss Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/2/f200c585057566572804_1.jpg",
      str_price: "812",
      price: "750",
      id:1
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove Glow Fix Stick",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04bcb845057566296502_-_1.jpg",
      str_price: "699",
      price: "629",
      id:2
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Pore Blur Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/5/f5ef6f55057566076579_1.jpg",
      str_price: "850",
      price: "723",

    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Liquid Powder Make Up Serum",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/c/ac092e85057566430845_-_1.jpg",
      str_price: "1150",
      price: "1035",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Illuminating Prime & Fix Duo Gift Set",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/6/96a071c1531009-revolution-illuminatingprime-fixduo_1.jpg",
      str_price: "1550",
      price: "1473",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Hydrate Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/1/c12ab845057566479165_-_1.jpg",
      str_price: "850",
      price: "723",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove Blur Fix Stick",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/004bb845057566479196_-_1.jpg",
      str_price: "699",
      price: "629",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Mattify Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/8/08636f55057566076609_1.jpg",
      str_price: "850",
      price: "723",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove H2o Hydrate Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/004bb845057566479196_-_1.jpg",
      str_price: "599",
      price: "569",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Prime Bright Brightening Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/6/16be621makeu00000104_new_1.jpg",
      str_price: "1150",
      price: "1035",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove Pore Vanish Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/004bb845057566479196_-_1.jpg",
      str_price: "599",
      price: "569",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove Super Matte Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/e/8e80b845057566479189_-_1.jpg",
      str_price: "599",
      price: "569",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Makeup Revolution Rehab Retinol Rescue Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/9/69f0c585057566442855_1.jpg",
      str_price: "950",
      price: "903",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove Power Fix Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/7/4761b845057566479172_-_1.jpg",
      str_price: "599",
      price: "569",
    },
    {
      brand: "Makeup Revolution",
      category: "face",
      sub_category: "face primer",
      prodname: "Revolution Relove H2o Hydrate Fix Stick",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/d/1d15b845057566359870_-_1.jpg",
      str_price: "699",
      price: "629",
    },
  
    //   lakme / face / face primer
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Blur Perfect Makeup Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/l/a/lakm_-absolute-blur-perfect-makeup-primer.jpg",
      str_price: "800",
      price: "480",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme 9 to 5 Primer + Matte Powder Foundation Compact",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/2/02e3d0d8901030654886_h.jpg",
      str_price: "600",
      price: "360",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Blur Perfect Makeup Primer - Mini",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
      str_price: "299",
      price: "239",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Under Cover Gel Face Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24358_h-8901030725692_1.jpg",
      str_price: "800",
      price: "480",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Glow Gold Combo",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/1/f1b73e7LAKME00000473_1.jpg",
      str_price: "1475",
      price: "811",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Blur Perfect Makeup Primer + Insta Liner Eye ...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nylakmecom424.jpg",
      str_price: "940",
      price: "705",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Prime & Glow Combo",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/b/ebf5fa5LAKME00000440_1.jpg",
      str_price: "1450",
      price: "870",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Illuminating Blush Shimmer Brick - In Pink + ...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nylakmecom434_23895_23657_1.jpg",
      str_price: "1575",
      price: "1134",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Absolute Dew Serum Foundation + Primer",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/b/5b6a3beLAKME00000654.jpg",
      str_price: "1675",
      price: "1005",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Eyeconic Curling Mascara - Black + Absolute Blur Perfe...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/989eb93nylakmecom437_old_1.jpg",
      str_price: "1275",
      price: "956",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Eyeconic Curling Mascara - Black + Absolute Blur Perfe...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/989eb93nylakmecom437_old_1.jpg",
      str_price: "1275",
      price: "956",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Eyeconic Curling Mascara - Black + Absolute Blur Perfe...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/989eb93nylakmecom437_old_1.jpg",
      str_price: "1275",
      price: "956",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Eyeconic Curling Mascara - Black + Absolute Blur Perfe...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/989eb93nylakmecom437_old_1.jpg",
      str_price: "1275",
      price: "956",
    },
    {
      brand: "Lakme",
      category: "face",
      sub_category: "face primer",
      prodname: "Lakme Eyeconic Curling Mascara - Black + Absolute Blur Perfe...",
      img_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/989eb93nylakmecom437_old_1.jpg",
      str_price: "1275",
      price: "956",
    },
  ];


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
  console.log(dataarray)
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
          if(check(el)){
            alert("product Already Added")
          }else{
            let element=data.splice(el,1)
            dataarray.push({...el,quatity:1})
           localStorage.setItem("addtocart",JSON.stringify(dataarray))
           
           alert("product Added")
           window.location.href="./cart.html"
          }
   
           
        })
       
card.append(imge,h2,h4,h3a,h3,p,rat,rat2,rat3,rat4,button)
container.append(card)

    });  
}
console.log(dataarray)
display(data1)
function check(el){
  for(let i=0;i<dataarray.length;i++){
   
   
    if(dataarray[i].price==el.price){
     
      return true
    }
    return false
  }
}

 

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

  

   


   
