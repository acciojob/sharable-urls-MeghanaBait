// your code here
document.getElementById('infoForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get the values from the input fields
            var name = document.getElementById('name').value;
            var year = document.getElementById('year').value;

            // Create the query string
            var queryString = `?name=${name}&year=${year}`;

            // Update the h3 element with the new URL
            document.getElementById('url').textContent = `https://localhost:8080/${queryString}`;
        });