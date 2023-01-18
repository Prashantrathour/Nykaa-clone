console.log("hello")
imageslide=["https://images-static.nykaa.com/uploads/ea7f773b-1b3d-46e8-bb13-5c5f075b789b.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/32e8d407-f9b5-485a-b953-a25d379dcc80.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/9813e7b1-6186-4189-a04d-e7de75104e4b.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/04d0c1d0-3bd5-49cd-8d38-655a9f3c003b.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/a294f8d2-8bb6-4912-9ac9-896cfa2685dc.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/722e2d8c-476e-4993-be69-a505143ceca2.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/4e0cc868-6e20-4dd9-9200-3e5dfa660a88.jpg?tr=w-1200,cm-pad_resize",
"https://images-static.nykaa.com/uploads/a908e8ad-3bd3-4d87-bca2-2fca7c54bf98.jpg?tr=w-1200,cm-pad_resize"]
let count=0;
let slide=document.getElementById("slide");
img=document.createElement("img")
slide.append(img)

setInterval(() => {
  if(count==imageslide.length){
    count=0
  }
  img.setAttribute("src",imageslide[count])
  count++;
}, 1500);
var data = [
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
  console.log("data")
console.log(data[0].price)
let container=document.getElementById("cont")
console.log(  "cont"+container)
function display(data) {
    container.innerHTML="";
    data.forEach((el,i) => {
      console.log(el.sub_price)
        let card=document.createElement("div")
        let imge=document.createElement("img")
        imge.setAttribute("src",el.img_url)
        let h2=document.createElement("h2")
        h2.innerText=el.prodname
        let h4=document.createElement("h4");
        h4.innerText=el.brand
        let h5=document.createElement("h4");
        h4.innerText=el.category;
        let p=document.createElement("p");
        p.innerText=el.sub_category
        let h3=document.createElement("h3");
        h3.innerText=el.price
        let h3a=document.createElement("h3");
        h3a.innerText=el.str_price
card.append(imge,h2,h4,h5,p,h3,h3a)
container.append(card)

    });
}
  display(data)

  
  var popular_brand_names = [
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

   


   
