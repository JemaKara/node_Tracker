
console.log('Client-side code running');

//const button = document.getElementById('myButton');
document.addEventListener('DOMContentLoaded', function () {

    const page = document.documentElement;

   // seite.addEventListener('mouseover', findTrigger);
    page.addEventListener('click', findTrigger);
    function findTrigger(event) {
        fetch('http://localhost:8081/clicked', {
            method: 'POST'})
        /*
        const elem = event.target,
            elemName = elem.nodeName;
        var responseClone;
        fetch('http://localhost:8080/clicked', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({a: 1}),

        }).then(function(response) {
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

         */

    }

});



/*

document.addEventListener('DOMContentLoaded', function () {

    var page = document.documentElement;
    page.addEventListener('click',  function (e) {

        const cl = event.target.nodeName;
        console.log('button was clicked');

        fetch('/clicked', {
            method: 'POST',
            body: JSON.stringify(cl),
            headers: {'Content-Type': 'application/json'}})
            .then(function(response) {
                if(response.ok) {
                    console.log('click was recorded');
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
    } , false);

});





setInterval(function() {
    fetch('/clicks', {method: 'GET'})
        .then(function(response) {
            if(response.ok) return response.json();
            throw new Error('Request failed.');
        })
        .then(function(data) {
            document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
        })
        .catch(function(error) {
            console.log(error);
        });
}, 1000);



 */