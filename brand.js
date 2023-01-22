let home=document.getElementById("home")
home.addEventListener("click",(e)=>{
      e.preventDefault()
      window.location.href="./index.html"
})
  var data1= [
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/HeaderIcons/The-Face-Shop.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2018/colorbar-logoforui.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/nyx_New.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png",
    },
    { img_url: "https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png" },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/clinique.png",
    },
    {
      img_url: "https://adn-static2.nykaa.com/media/wysiwyg/2018/neutrogena.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Estee-Lauder.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png",
    },
    {
      img_url:
        "https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png",
    },
  ];
  document.getElementById("count").innerText=data1.length
let sort=document.getElementById("sort");
let parent=document.getElementById("cont")

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
  if(( el.brand.toUpperCase().includes(valuesearch.toUpperCase()) ===true)){
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
       
card.append(imge)
container.append(card)

    });  
}

display(data1)
