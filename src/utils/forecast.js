const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=964b608a00072a00242b193af2f360e2&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees out.');
        }
    })
}

module.exports = forecast;