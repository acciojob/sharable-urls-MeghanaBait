// your code here
document.getElementById('infoForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get the values from the input fields
            let name = document.getElementById('name').value;
            let year = document.getElementById('year').value;

            // Create the query string
            let queryString = `?name=${name}&year=${year}`;

            // Update the h3 element with the new URL
            document.getElementById('url').innerHTML+= `${queryString}`;
        });