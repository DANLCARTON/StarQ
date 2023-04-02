const getQuote = async() => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=movies", {
        headers: {
            'X-Api-Key': '64YcrzPytUgAmdewJsPbrQ==NRbjSeC2vjx2W8s4'
        },
    })
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

/*
const request = require('request');
var category = 'happiness';
request.get({
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: {
        'X-Api-Key': '64YcrzPytUgAmdewJsPbrQ==NRbjSeC2vjx2W8s4'
    },
}, function(error, response, body) {
    if (error) return console.error('Request failed:', error);
    else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else console.log(body)
});
*/

export { getQuote };