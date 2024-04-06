const product = [{
    id: 0,image: 'https://www.techspot.com/images/products/2020/headphones/org/2020-12-10-product-5.jpg',
    title: 'sluchatka Apple',
    price: 12000,
},
{
    id: 1,
    image: 'https://th.bing.com/th/id/OIP.wUxUvpHULaO3O871WmnVDwHaHa?rs=1&pid=ImgDetMain',
    title:'klavesnice yenkee',
    price: 1500,
},
{
    id: 2,
    image: 'https://th.bing.com/th/id/OIP.HDlByr3zAmQ-N-bD0cy0RQHaGX?rs=1&pid=ImgDetMain',
    title: 'myš razer',
    price: 1200,
},
{
    id: 3,
    image: 'https://live.staticflickr.com/65535/49747503557_fa12f113db_h.jpg',
    title: 'PS5 controler',
    price: 2400,
}
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>Kč ${price}</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')
    
    var cart =[];
    
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    
    function displaycart(){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "košík je prazdný";
            document.getElementById("total").innerHTML = "Kč ";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "Kč "+total;
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Kč ${price}</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    
        
    }
    