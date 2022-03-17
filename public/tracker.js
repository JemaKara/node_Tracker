
     function findTrigger(name) {
         fetch("https://ipinfo.io/json?token=3115bb45ac13da").then(
             (response) => response.json()
         ).then(
             (jsonResponse) =>
         fetch('http://localhost:8080/clicked', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({name: name, country: jsonResponse.country}),

        })).then(function (response) {
            if (response.ok) {
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
            .catch(function (error) {
                console.log(error);
            });


    };

