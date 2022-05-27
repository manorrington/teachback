// API: https://reqres.in/
// -- Uncomment something to see how it works -- //

// GET //
// fetch('https://reqres.in/api/users')
//     .then(response => {
//         if (response.ok) {console.log('GET request successful')}
//         else { console.log('GET request unsuccessful')}
//         return response;
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

/* GET: is an automated method inside of fetch. fetch allows you to grab and access APIs and put them into your code. by opening a json file, you turn the data from the API into an javascript object allowing you edit the data. 
(scenario I: a company decides to implement an API to store employee data.) */



// POST //
// fetch('https://reqres.in/api/users', {
//     method: "POST",
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             "name": "john",
//             "job": "data analyst"
//         }
//     )
//     })
//     .then(response => {
//         if (response.ok) {console.log('POST request successful')}
//         else { console.log('POST request unsuccessful')}
//         return response;
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
/* POST: allows you to create new key-values inside of the object.
(scenario II: when new employees are hired, the company sends a POST request to add them into the system.) */



// PUT //
// fetch('https://reqres.in/api/users/2', {
//     method: "PUT",
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             "name": "john",
//             "job": "senior data anaylst",
//         }
//     )
//     })
//     .then(response => {
//         if (response.ok) {console.log('PUT request successful')}
//         else { console.log('PUT request unsuccessful')}
//         return response;
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

/* PUT: allows you update specific key-values.
(scenario III: if an employee's position changes, the company sends a PUT request to update their position in the system.) */



// DELETE //   
// fetch('https://reqres.in/api/users/2', {
//     method: "delete",
//     headers: {
//         'Content-type': 'application/json'
//     },
// })
//     .then(response => {
//     if (response.ok) {console.log('DELETE request successful')}
//     else { console.log('DELETE request unsuccessful')}
//     return response;
// })
//     .then(res => console.log(res))

/* DELETE: allows you to delete specific key-values.
(scenario IIII: if an employee is terminated, the company sends a DELETE request to remove them from the system.) */
