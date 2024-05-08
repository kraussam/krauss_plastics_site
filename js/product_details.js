// product_details.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch CSV data from URL
    function fetchCSV(url, callback) {
        fetch(url)
            .then(response => response.text())
            .then(text => {
                const data = text.split('\n').map(row => row.split(','));
                callback(data);
            });
    }

    // Function to get URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function to load product details based on index
    function loadProductDetails(index, data) {
        const product = data[index];
        if (product) {
            const title = product[1];
            const imagePath = `data/catalogue/images/${product[2]}`;
            const description = product[3];
            const price = product[4];
            const discountPrice = product[5];
            const unitsPerBox = product[6];
            const unitsPerSkid = product[7];

            const productDetailsHTML = `

            <div class="product_details" xmlns="http://www.w3.org/1999/html">
            <section class="sub_content" style="margin-bottom: 0">
                <div class="row" style="text-align: left">
                    <div class="col2">
                        <hr>
                        <div class="price" style="text-transform: uppercase;">${title}</div>
                        <div class="units_per_box"> hi </div>
                        <div class="img_container" > <img src="${imagePath}" alt="${title}" style="margin-top: 30px"> </div>
                      
                    </div>
             
                    <div class="col2">
                        <hr>                 
                        <div class="product_cell"> <span class="price">${price}</span> ($CA) <span class="discount_price">${discountPrice}</span> </div>
                        <div class="units_per_box">${unitsPerBox}pc / box | ${unitsPerSkid}pc / Skid</div>
                        <div> <p>${description}</p> </div>
                    </div>
                    </div>
                <div class="row" style="margin-top: 100px">
            
            
                    <div class="col2">
                        <hr>
                        <h1> Plant Location </h1>
                        <iframe allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBcL3oVAlK4gRjGeAxb4fDmU&key=AIzaSyBydhYZtDT2xhAQ2Awibjdke3fyUgmxJ9s"></iframe>
                        <p> We do local pick-up at our warehouse dock and long-distance shipping at request</p>
                        
                    </div>
                    <div class="col2">
                        <hr>
                        <h1> Specifications </h1>
                        <div style=" justify-content: center">
                             <div class="row" style="margin: 0;"> 
                                <div class="col2_lined_left"> hi : </div>
                                <div class="col2_lined_right"> hi : </div>
                             </div>
                        </div>
                        <p> Any questions? Email us <a href="index.html" class="button_1"> info@kraussplastics.ca</a> or speak with our production manager at<a href="index.html" class="button_1"> 905-856-1445</a>
                        </div>
                        </div>
                        
            
                
                      
                    </div>
                </div>
           
    
              
            </section>
            
            </div>
                     
            `;

            const productDetailsContainer = document.getElementById('productDetailsContainer');
            productDetailsContainer.innerHTML = productDetailsHTML;
        }
    }

    // URL of your CSV file relative to the HTML file's location
    const csvURL = 'data/catalogue/catalogue.csv';

    // Get the index of the selected product from the query string
    const productIndex = getParameterByName('index');

    // Fetch CSV and load product details
    fetchCSV(csvURL, function(data) {
        loadProductDetails(productIndex, data);
    });
});
