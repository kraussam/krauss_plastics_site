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

    // Function to generate HTML for each product
    function generateProductHTML(index, title, imagePath, description, price, unitsPerBox, discountPrice, unitsPerSkid) {
        return `
        <div class="product_cell">
            <div class="img_container">
             <a href="product_details.html?index=${index}" class="product_details_button" target="_blank"><img src="media/icons/share.png" alt="Share"></a>
                <img src="${imagePath}" alt="${title}">
            </div>
            
            <div> <span class="price">${price}</span> ($CA) <span class="discount_price">${discountPrice}</span> </div>
            <div class="units_per_box">${unitsPerBox}pc / box | ${unitsPerSkid}pc / Skid</div>
            <div> <p>${description}</p> </div>
        </div>
    `;
    }

// Function to populate the grid with products
    function populateGrid(data) {
        const gridContainer = document.getElementById('gridContainer');
        // Skip the first row (headers)
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            // Check if row is not empty and has enough data for each col
            if (row.length >= 8) {
                const index = i; // Unique identifier for each product
                const title = row[1];
                // Construct image path relative to the CSV file's location
                const imagePath = `data/catalogue/images/${row[2]}`;
                const description = row[3];
                const price = row[4];
                const discountPrice = row[5]; // New col for discount price
                const unitsPerBox = row[6];
                const unitsPerSkid = row[7];

                const productHTML = generateProductHTML(index, title, imagePath, description, price, unitsPerBox, discountPrice, unitsPerSkid);
                const col = document.createElement('div');
                col.classList.add('col');
                col.innerHTML = productHTML;
                gridContainer.appendChild(col);
            }
        }

        // Add event listeners to product detail buttons
        const detailButtons = document.querySelectorAll('.product_details_button');
        detailButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Redirect to the product details page with the corresponding index in the query string
                window.location.href = `product_details.html?index=${index}`;
            });
        });
    }


    // URL of your CSV file relative to the HTML file's location
    const csvURL = 'data/catalogue/catalogue.csv';

    // Fetch and populate grid with products
    fetchCSV(csvURL, populateGrid);







});
