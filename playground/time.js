var moment = require('moment');

//new Date().getTime()
var sometimeStamp = moment().valueOf();
console.log(sometimeStamp);

var createdAt = 1234;
var date = moment(createdAt);
//date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY hh:mm a'));