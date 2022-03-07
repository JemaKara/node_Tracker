
console.log('Client-side code running');

//const button = document.getElementById('myButton');
document.addEventListener('DOMContentLoaded', function () {
    const page = document.documentElement;
    // seite.addEventListener('mouseover', findTrigger);
    page.addEventListener('click', findTrigger);
    function findTrigger(event) {
        const elem = event.target,
            elemName = elem.nodeName;
        var responseClone; // 1
        fetch('http://localhost:8080/clicked', {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(elemName),
        })
            .then(function(response) {
                if(response.ok) {
                    console.log('click was recorded');
                    responseClone = response.clone(); // 2
                    return response.json();
                }
                throw new Error('Request failed.');
            }).then(function (data) {
            // Do something with data
        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
                .then(function (bodyText) {
                    console.log('Received the following instead of valid JSON:', bodyText); // 6
                });
        })
            .catch(function(error) {
                console.log(error);
            });
    }

});
