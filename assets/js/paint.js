function configureListeners() {
    let images = // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

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
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
             price = "$11.99";
             colorName = "Brown";    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
             price = "$22.99";
             colorName = "Royal blue";
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = "$4.99";
            colorName = "Solid Black"; 
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = "$8.22";
            colorName = "Solid Cyan";        
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price  
            price = "$11.99";
            colorName = "Solid Purple";       
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = "$13.42";
            colorName = "Solid Red"; 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = "$21.98";
            colorName = "Solid White"; 
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = "$14.99";
            colorName = "Solid Yellow"; 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
