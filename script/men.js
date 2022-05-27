
var data=JSON.parse(localStorage.getItem("data"));
console.log("ok",data);
var cartAdd=JSON.parse(localStorage.getItem("cartItems",))||[];
    data.map(function (elem, index, array) {
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
    price.innerText = elem.price ;
    price.setAttribute("id","price")
    

    var _rs = document.createElement("p");
    _rs.innerText = elem.tag;
    _rs.setAttribute("id","_rs");
    var strikedOffPrice = document.createElement("strike");
    strikedOffPrice.innerText= elem.strikedOffPrice;
    strikedOffPrice.setAttribute("id","strikeprice")

    var addtocart=document.createElement("button");
    addtocart.innerHTML="Add to Cart";
    addtocart.setAttribute("class","addCart")

    addtocart.addEventListener("click",function(){
        _addCart(data,index);
    });

    seconddiv.append(rs,price,_rs,strikedOffPrice);
    div.append(avatar, name,seconddiv,addtocart);
    document.querySelector("#container").append(div);


})

function _addCart(d,i){
    console.log(d[i]);
    d[i].qty=1;
    console.log(d[i].qty)
    cartAdd.push(d[i]);
    console.log(cartAdd);
    localStorage.setItem("cartItems",JSON.stringify(cartAdd))
}