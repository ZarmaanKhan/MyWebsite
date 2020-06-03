document.write("<link rel='stylesheet' href='CSS/theme.css'>");
document.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous'>");
document.write("<script src='https://kit.fontawesome.com/2583d49ecc.js' crossorigin='anonymous'></script>");

window.onscroll = function () { Scroll() };
function Scroll() {
    if (document.body.scrollTop > document.getElementById("nav").offsetTop || document.documentElement.scrollTop > document.getElementById("nav").offsetTop) {
        document.getElementById("nav").style.position = "fixed";
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.width = "100%";
        document.getElementById("topbutton").style.visibility="visible";
        document.getElementById("content").style.marginTop ="56px";
    }
    else{
        document.getElementById("nav").style.position = "static";
        document.getElementById("topbutton").style.visibility="hidden";
        document.getElementById("content").style.marginTop="0";
    }
};

class Item{
    constructor(n, alt, d, p, i){
        this.name = n;
        this.price = p;
        this.description = d;
        this.image = i;
        this.alternative = alt;
    }
    name;
    price;
    description;
    image;
    alternative;
}

var I = [new Item("XZS X-13", "XZS X-13", "Quality handsfree with Gold plated 3.5mm pin.", "350", "x13.jpg")];
          I[I.length] = new Item("XZS X-68", "XZS X-68", "Quality handsfree with Gold plated 3.5mm pin.", "350", "x68.jpg");
          I[I.length] = new Item("XZS X-32", "XZS X-32", "Quality handsfree in a variety of colors.", "300", "x32.jpg");
          I[I.length] = new Item("M5", "M5", "Popular handsfree.", "280", "m5.jpg");
          I[I.length] = new Item("4 port charger", "4A Charger", "A 4 port 4A Charger.", "450", "4a.jpg");
          I[I.length] = new Item("Note 4 USB Cable", "Cable for Note 4", "USB cable suitable for charging and connecting Note4", "180", "note4cable.jpg");
          I[I.length] = new Item("Samsung Charger", "Charger", "Charger with Samsung branding", "250", "samsungchargera.png");
          I[I.length] = new Item("Charger", "Charger", "A Black Charger", "200", "samsungchargerb.png");
          I[I.length] = new Item("Intel Core i7 950", "Processor", "Intel Core i7 950, 4 core 8 thread processor", "4,000", "950.jpg");

function MakeCardA(Item){
    document.write("<div class='card m-2' style='width: 15rem;' onclick='seeProduct(\""+ Item.name +"\")'>"
+    "<img src='images/" + Item.image + "' class='card-img-top' alt='" + Item.alternative + "'>"
+    "<div class='card-body'>"
+      "<h5 class='card-title'>" + Item.name + "</h5>"
+      "<p class='card-text'>" + Item.description + "</p>"
+      "<h5>Rs. " + Item.price + "</h5>"
+      "<!-- <a href='#' class='btn btn-primary'>Go somewhere</a> -->"
+    "</div></div>");
}

function seeProduct(I){
    localStorage.setItem("Product", I);
    window.location.href = "products.html";
}