//store the products array in localstorage as "data"




 document.querySelector("form").addEventListener("submit",function(){
  event.preventDefault()

   let b=document.getElementById("product_brand").value
   let n=document.getElementById("product_name").value
   let p=document.getElementById("product_price").value
   let i=document.getElementById("product_image").value
   let data=JSON.parse(localStorage.getItem("data"))||[];
   console.log(b,n,p,i)
   let d= new cons(b,n,p,i)
    data.push(d)
    console.log(data)
   localStorage.setItem("data",JSON.stringify(data))
 })
 function cons(b,n,p,i){
     this.brand=b;
     this.name=n;
     this.price=p;
    this.image=i
 }

