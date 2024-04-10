const truecallerjs = require('truecallerjs');

var countryCode = "IN";
var installationId = "a1i0d--m6O16tVR-cse_3pm29zz8rHfb4RzQ5asX3_Hr6JTrdskR9Itqo7Db5_Bo";
var phoneNumbers = "+917307100287,+919696080889" // Phone numbers seperated by comma's

const searchResult = truecallerjs.bulkSearch(phoneNumbers,countryCode,installationId)
searchResult.then(function (response) {
    const data = JSON.stringify(response, null, 2);
    console.log(data);
})