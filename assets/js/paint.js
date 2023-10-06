function configureListeners() {
    let images = document.querySelectorAll('img'); // select img elements  


    for (var i = 0; i < images.length; i++) {
        // iterate over images and add mouseover event listeners  
        images[i].addEventListener('mouseover', addOpacity);    //mouseover event listener
        images[i].addEventListener('mouseout', removeOpacity);  //mouseout event listener
    }
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id); //invokes getProductInfo function to get which color was hovered over
    event.target.classList.add('dim'); //adds dim class

}

function removeOpacity(event) {
    //remove appropriate CSS class

    let element = document.getElementById('color-price'); //removes text from price header
    element.textContent = '';

    let color = document.getElementById('color-name');//removes text from color name header
    color.textContent = '';

    event.target.classList.remove('dim'); //removes dim class

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name and invoke a function to update the price 
            price = "$14.99";
            colorName = "Lime green";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            price = "$11.99";
            colorName = "Brown";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = "$22.99";
            colorName = "Royal blue";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = "$13.42";
            colorName = "Solid Red";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn5':
            // set variables for price and color name and invoke a function to update the price   
            price = "$21.98";
            colorName = "Solid White";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = "$4.99";
            colorName = "Solid Black";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = "$8.22";
            colorName = "Solid Cyan";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;

        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            price = "$11.99";
            colorName = "Solid Purple";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;


        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = "$14.99";
            colorName = "Solid Yellow";
            updatePrice(colorName, price);  //invokes updatePrice function to show price and color name
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = price;// select element with corresponding id
        // display price
        document.getElementById('color-price').textContent = colorPrice;    //displays price

        let color = colorName // select element with corresponding id
        //display color name
        document.getElementById('color-name').textContent = color;    //displays color name
    }

}
