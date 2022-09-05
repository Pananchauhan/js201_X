

  function append(){
  let data=JSON.parse(localStorage.getItem("data"))||[];
  let products_data=document.getElementById("products_data")
    products_data.innerHTML=""

    data.forEach(function(ele,index){
      let div=document.createElement("div")
      div.setAttribute("id","products_data")

      let img=document.createElement("img")
      img.src=ele.image
       let p1=document.createElement("p")
       p1.innerText=ele.brand
       let p2=document.createElement("p")
       p2.innerHTML=ele.name
       let p3=document.createElement("p")
       p3.innerHTML=ele.price
       let button=document.createElement("button")
       button.innerHTML="remove"
       button.setAttribute( "id","remove_product")
       button.addEventListener("click",function(){
        remove(ele,index)
       })
       div.append(img,p1,p2,p3,button)
      products_data.append(div)


    })
  }
  append()
  function remove(ele,index){
  let data=JSON.parse(localStorage.getItem("data"))||[];
   data.splice(index,1)
   localStorage.setItem("data",JSON.stringify(data))
    append()
  }


