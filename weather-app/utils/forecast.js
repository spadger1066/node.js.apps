const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d9229ce0fa5c3ba5df1768483a6f4a3e/' + latitude + ',' + longitude + '?units=si';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service.')
        } else if (body.error){
            callback('Unable to find location.')
        } else {
            callback(undefined, {
                summary: body.currently.summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
        }
    });
};

module.exports = forecast;