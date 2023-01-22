var data1= JSON.parse(localStorage.getItem("makepayment"))||[]
console.log(data1)

let parent=document.getElementById("cont")


// let dataarray=JSON.parse(localStorage.getItem("makepayment"))||[]
  ////
//   console.log("data",dataarray)
let container=document.getElementById("cont")
display(data1)

function display(data) {
  
    ///////check
    
    
    
        container.innerHTML="";
        data.forEach((el,i,data) => {
        
            let card=document.createElement("div")
            let imge=document.createElement("img")
            imge.setAttribute("src",el.img_url||[el.image1])
            let h2=document.createElement("h6")
            h2.innerText=el.prodname
            let h4=document.createElement("h6");
            h4.innerText=el.brand
            // let h5=document.createElement("h6");
            // h4.innerText=el.category;
            
            let h3=document.createElement("h6");
            h3.innerText="₹"+el.price
            let h3a=document.createElement("h6");
            h3a.innerText="MRP"+" "+"₹"+el.str_price||el.off_price
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
            button.innerText="Remove"
            button.addEventListener("click",(product)=>{
            //  delete el.price
                let element=data.splice(data[i+1],1)
               
               localStorage.setItem("makepayment",JSON.stringify(data1))
               
              
       
              display(data) 
            })
           
    card.append(imge,h4,h3a,h3,button)
    container.append(card)
    
        });  
    quant=document.getElementsByClassName("ht");
    quant[0].innerText=data1.length
    let sum=0;
    for(let i=0;i<data1.length;i++){
        sum+=+data1[i].price
    }
    document.getElementById("total").innerText=sum*data1.length
    // checl duplicate
   
    }