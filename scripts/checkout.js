var container = document.getElementById("price");

var text = document.getElementById("but_text");

var value = document.getElementById("value");
var one_month =  ()=>{
    container.innerHTML="";
    var main_div =  document.createElement("div");

    var prices = document.createElement("h1");
    prices.textContent = `Rs.599`;
    prices.id=`value`;
   

    main_div.append(prices);
    container.append(main_div);
}



var three_month =  ()=>{
    container.innerHTML="";
    var main_div =  document.createElement("div");

    var prices = document.createElement("h1");

     prices.textContent = "Rs.1599.00";
     prices.id=`value`;


    main_div.append(prices);
    container.append(main_div);
}


var des =  ()=>{
    text.innerHTML="";
    var main_div =  document.createElement("div");

    var line_1 = document.createElement("h4");
    line_1.textContent = "Sassy with side of Spring! Let your vanity bloom with 5 iconic must-haves featured in Sassy Spring April Fab Bag.";
     
    var line_2 = document.createElement("h4");
    line_2.textContent = "Here's what you can expect inside your April Fab Bag:"

    var line_3 = document.createElement("h5");
    line_3.textContent = "*Liquid Lipstick of your choice!*"

    var line_4 = document.createElement("h5");
    line_4.textContent = "*Body Mist"

    var line_5 = document.createElement("h5");
    line_5.textContent = "*Floral Fusion"

    var line_6 = document.createElement("h5");
    line_6.textContent = "*Face Masque"

    var line_7 = document.createElement("h5");
    line_7.textContent = "*Bonus*"

    var line_8 = document.createElement("h5");
    line_8.textContent="*Two offers cannot be clubbed. Makeup choice will be available on the order confirmation page"


    var line_9 = document.createElement("h5");
    line_9.textContent="on a first-come, first-served basis. Bonus product will be customized by the Fab Bag Crew."
    
    
    var line_10 = document.createElement("h4");
    line_10.textContent="FAB BAG delivers the best of beauty and makeup products once a month, customized just for you."
    
    main_div.append(line_1,line_2,line_3,line_4,line_5,line_6,line_7,line_8,line_9,line_10);
    text.append(main_div);
}



var policy = ()=>{
    text.innerHTML="";
    var main_div =  document.createElement("div");

var line_1 = document.createElement("h4");
    line_1.textContent = "Returns Policy for FAB BAG Monthly Subscriptions: 100% Happiness or Money-Back Guarantee";

    var line_2 = document.createElement("h4");
    line_2.textContent = "For more details, please see our Policy here";

    var line_3 = document.createElement("h4");
    line_3.textContent = "Should you have any questions regarding this product, please feel free to get in touch with our friendly Customer Experience Team at crew@fabbag.com within 48 hours of receiving the shipment or call us at 022-4896-7878 Mon - Fri, 9am - 7pm.";

    main_div.append(line_1,line_2,line_3);
    text.append(main_div);

}


var rev = ()=>{
    text.innerHTML="";
    var main_div =  document.createElement("div");

    var line_1 = document.createElement("h3");
    line_1.textContent = "Customer Reviews";

    var line_2 = document.createElement("h4");
    line_2.textContent = "No Reviews Yet";


    var butn = document.createElement("button");
    butn.textContent="Write an Review";
    butn.style.width=`180px`;
    butn.style.height=`30px`;
    butn.style.border=`none`;
    butn.style.color=`#e5b95f`;
    butn.style.borderBottom =`1px solid black`

    main_div.append(line_1,line_2,butn);
    text.append(main_div);
}

var count = 0;
var cart = ()=>{

    
    var stack = [];
    var name = document.getElementById("product_title").textContent;
    var price_1 = container.textContent;
    var image = document.getElementById("img").src;

    stack.push(name,price_1,image);
    console.log(stack);


  localStorage.setItem("totalprice",JSON.stringify(stack))
  

   
    



}
cart();

document.getElementById("cart").addEventListener("click",function(){
    window.location.href='cart.html'
  });