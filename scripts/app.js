class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title,image,desc,price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price; 
    }
}

    class ShoppingCart{
        items = [];
        render(){
            const cartEl = document.createElement('section');
            cartEl.innerHTML = `<h2>Total:\$${0}</h2>
            <button> Buy Now</button>
            
            `;
            cartEl.className = 'cart';
            return cartEl;
        }
    }

    class ProductItem{
        constructor(product){
            this.product = product;
        }
        addCart(){
            console.log('Adding items to cart');
            console.log(this.product)
        }
        render(){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div> 
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content"></div>
                <h2>${this.product.title}</h2>
                <h3>\$ ${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart!</button>
                </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click',this.addCart.bind(this));
            return prodEl;
        }
    }
    class ProductList {
     products = [
         new Product('Pillow  🛌',
         'https://www.maxpixels.net/static/photo/1x/Sleep-Bedtime-Pillow-Bedroom-Dream-Comfortable-1738023.jpg',
         'A soft pillow',
         19.99),
         new Product('Shoe 👟',
         'https://www.maxpixels.net/static/photo/1x/Run-Sports-Shoes-Jog-Shoes-Sneakers-Running-Shoes-1024979.jpg',
         'Running sport shoe for MEN',
         49.99)
    
    
    ];


        constructor(){}
  
       render(){
     
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
           
            prodList.append(prodEl);

        }
       return prodList;
       }
    }

      class Shop {
          render(){
            const renderHook = document.getElementById('app');

              const cart = new ShoppingCart();
              const cartEl = cart.render();
            const productList = new ProductList();
             const prodListEl = productList.render();

             renderHook.append(cartEl);
             renderHook.append(prodListEl);
          }
      }

      const shop = new Shop();
      shop.render();
