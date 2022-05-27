var cartdata=JSON.parse(localStorage.getItem("cartItems"))||[];
console.log("ok",cartdata);
const checkout=document.querySelector(".checkout");

var promoCode = document.querySelector(".promo>input[type='button']");


promoCode.addEventListener("click",apply_discount);
checkout.addEventListener("click",chkot);
function showtotal(items){
    document.querySelector("#container").innerHTML="";
// document.querySelector("#total").innerHTML="";
    items.map(function (elem, index, array) {
    // image, name , company logo image , role
    
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);


    var name = document.createElement("h4");
    name.innerText = elem.name;
    name.setAttribute("id","name")

    var seconddiv=document.createElement("div")
    seconddiv.setAttribute("class","secdiv")

    var rs = document.createElement("p");
    rs.innerText = elem.tag;
    rs.setAttribute("id","rs");

    
    var price = document.createElement("p");
    price.innerText = elem.price 
    price.setAttribute("id","price")
    
    
    var _rs = document.createElement("p");
    _rs.innerText = elem.tag;
    _rs.setAttribute("id","_rs");
    var strikedOffPrice = document.createElement("strike");
    strikedOffPrice.innerText= elem.strikedOffPrice;
    strikedOffPrice.setAttribute("id","strikeprice")

    // var addtocart=document.createElement("button");
    // addtocart.innerHTML="Add to Cart";
    // addtocart.setAttribute("class","addCart")

    // addtocart.addEventListener("click",function(){
    //     _addCart(data,index);
    // });
        var updown=document.createElement("div");
        updown.setAttribute("class", "updown");
    var mibtn= document.createElement("button");
    mibtn.addEventListener("click", function(){
        decrese(index)
    } )
    mibtn.innerText= "-";
    mibtn.setAttribute("id", "mibtn");
    var qty = document.createElement("p");
    qty.setAttribute("id", "qty");
    qty.innerText=" Qty-"    + elem.qty;

    var pobtn= document.createElement("button");
    pobtn.addEventListener("click", function(){
     increse(index)
 } )
    pobtn.innerText= "+"
    pobtn.setAttribute("id", "pobtn");
    // var showqty = document.createElement("p");
   // document.querySelector(".showQty").textContent=elem.qty;
    
    updown.append(mibtn,qty,pobtn);
    seconddiv.append(rs,price,_rs,strikedOffPrice);
    div.append(avatar, name,seconddiv,updown);
    document.querySelector("#container").append(div);

    
});
}//showtotal end



function totalprice(){
    var total=cartdata.reduce(function (acc,items){
        return acc+Number(items.price*items.qty);
    },0);
    document.querySelector("#total").textContent=total;
}
totalprice();


showtotal(cartdata);

function increse(index){
    cartdata[index].qty++;
    localStorage.setItem("cartItems",JSON.stringify(cartdata));
    totalprice();
    showtotal(cartdata);
}


function decrese(index){
    if(cartdata[index].qty>1){
        cartdata[index].qty--;
    }
    
    localStorage.setItem("cartItems",JSON.stringify(cartdata));
    totalprice();
    showtotal(cartdata);
}




function apply_discount(){
    var code = document.querySelector("#promo").value;
    var total = cartdata.reduce(function(acc,items){
      return acc+(items.price * items.qty);
    },0);
    if(code=='masai30'){
      document.querySelector("#total").innerText= Math.floor((total/100)*70);
      document.querySelector(".code_or_not").innerText="Code Applied";
      document.querySelector(".code_or_not").style.padding="4px 8px";
  
    }else if(code.trim().length==0){
      alert("Please enter some code first");
    }
    
    else {
      alert("wrong code");
    }
    document.querySelector("#promo").value="";
  }

  function chkot(){
      window.location.href="./placed.html"
  }