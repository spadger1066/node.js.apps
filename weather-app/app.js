const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(!location){
    return console.log('Location not specified')
};

geocode(location, (error, {latitude, longitude, location}) => {
    if(error){
        return console.log('Error', error);
    }

    forecast(latitude, longitude, (error, {summary, temperature, precipProbability}) => {
        if(error){
            return console.log('Error', error);
        }

        console.log(location);
        console.log(summary + '. It is currently ' + temperature + ' degrees. There is ' + precipProbability + '% chance of rain.');
    });
});

