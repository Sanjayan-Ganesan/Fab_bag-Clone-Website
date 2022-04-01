
var im_contain = document.getElementById("image_container")
var text_contain = document.getElementById("main_text_testimonal")


var arr_txt = [
    {text_link:"I am getting addicted to Fab Bag's.The First one I have ordered was simply to check it out as my friend recommended.I am not someone who spends a lot of time thinking about beauty products an I am clueless when it comes to such matters,Which is why the Fab bag are perfect for me.This August Fab Bag had Everything I needed.Thee Product curation is Perfect,It's Like Having my own personal shopper for such beauty products and such pretty bags too."},
    {text_link:"I am highly impressed with the idea of surprising the customers by leaving them to guess,whats inside the bag Surprise brings excitement and I am always excited to receive my FAB Bag.First of all I Should say that the Bags are awesome and each time I got my Fab Bag.I was really happy to find whats inside it.Really Satisfied! :)"},
    {text_link:"I like the fact that they offer high-quality products.Every Single Product from the bag stands out.It is a MUST TRY for every girl out there."},
    {text_link:"I Love Each and Every Fab Bag that I receive each month post three years.I am so much in love with Fab Bags and all the lovely products and cute little pouches that I get.I love Fab Bag."},
    {text_link:"The Products are Amazing and I am just in love with the Bag!Kudos to your Team!"},
];
 

var arr_img = [
    {img_url:`https://1.bp.blogspot.com/-vVjZfwiOdnw/X3iMJGChNvI/AAAAAAAAX_o/Ex7baw0ovZQh_ih0WmECyBtTYHWryfiHQCLcBGAsYHQ/s1620/Fab%2Bbag%2BOctober%2B2020.jpg`},
    {img_url:`https://i.pinimg.com/originals/14/76/8a/14768a1d8f2f2985922179721135de4a.jpg`},
    {img_url:`https://i1.wp.com/zigzacmania.com/wp-content/uploads/2020/06/Fab-Bag.jpg?resize=1018%2C685`},
    {img_url:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare-Reveal-4-5.png?v=1618133873`},
    {img_url:`https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_s-page---Reveal.gif?v=1591190792`},
];





function store(){
    

    var images = JSON.parse(localStorage.getItem(`images_data`))|| [];
    //console.log(`images`,images);
    
    
    if(images == null){
        images = [];
    }
    
    
    localStorage.setItem(`images_data`,JSON.stringify(arr_img));
      
       
        
    }
    
    store();


    function start(){
        var arr_of_images = JSON.parse(localStorage.getItem(`images_data`));
    
    var main_div = document.createElement("div");
    var images_datum = document.createElement("img");
        images_datum.style.width = `1340px`;
        images_datum.style.height = `550px`;
        images_datum.style.marginTop=`-1%`;
        
    
        var i = 0;
    let x = setInterval(function(){
    
        if(i === arr_of_images.length){
            i = 0;
        }
        images_datum.src = arr_of_images[i].img_url;
    
        i = i + 1;
    
    
        main_div.append(images_datum);
        im_contain.append(main_div);
    
    },3500);
        
    
    
    }
    start()