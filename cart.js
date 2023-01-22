let data=JSON.parse(localStorage.getItem("addtocart"))||[]


let container=document.getElementById("cont")
display(data)
function display(data) {
  
    ///////check
    
    
    
        container.innerHTML="";
        data.forEach((el,i) => {
        
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
            button.setAttribute("class","payment")
            button.innerText="Make Payment"
            let buttoni=document.createElement("button");
            buttoni.innerText="+"
            let buttond=document.createElement("button");
            buttond.innerText="-"
            let buttonc=document.createElement("span");
            
            buttonc.innerText=el.quatity;
            let remove=document.createElement("button")
            remove.innerText="Remove"
            let div=document.createElement("div")
            div.setAttribute("class","but")
            div.append(buttond,buttonc,buttoni,remove)
            remove.addEventListener("click",()=>{
                data.splice(el,1)
               
                localStorage.setItem("addtocart",JSON.stringify(data))
            
                 display(data)
            })

            buttoni.addEventListener("click",()=>{
                el.quatity++;
                display(data)
               
             
            })
            buttond.addEventListener("click",()=>{
                if(el.quatity>1){
                    el.quatity--;
                    display(data)
               
                }
                
            })
            
            button.addEventListener("click",(product)=>{
               
            })
           
    card.append(imge,h2,h4,h3a,h3,p,rat,rat2,rat3,rat4,button,div)
    container.append(card)
    
    
        });
        
       
     
            sum=0
            for(let i=0;i<data.length;i++){
                sum+=+data[i].price*data[i].quatity
            }
           document.getElementById("count").innerText=sum
   
           
        
        
    }
   