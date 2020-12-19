const productList ={
     products : [
        {
                title: 'Pillow 🛌',
                imageUrl: 'https://www.maxpixels.net/static/photo/1x/Sleep-Bedtime-Pillow-Bedroom-Dream-Comfortable-1738023.jpg',
                price: 19.99,
                description: 'A soft pillow'
    },
    {
        title: 'Shoe 👟',
        imageUrl: 'https://www.maxpixels.net/static/photo/1x/Run-Sports-Shoes-Jog-Shoes-Sneakers-Running-Shoes-1024979.jpg',
        price: 40.99,
        description: 'Running sport shoe for MEN'
    } 
    
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div> 
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content"></div>
                <h2>${prod.title}</h2>
                <h3>\$ ${prod.price}</h3>
                <p>${prod.description}</p>
                <buttton>Add to Cart!</button>

                </div>
            `
            prodList.append(prodEl);

        }

         
        renderHook.append(prodList);
    }
}
productList.render();