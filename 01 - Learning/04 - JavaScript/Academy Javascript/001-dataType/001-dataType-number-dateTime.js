// Thu Jun 30 2022 08:19:25 GMT+0700 (Giờ Đông Dương)
var d = new Date();
// 1656551965530 miliseconds passed since 1970
Number(d)
Date("2017-06-23"); // date declaration Date("2017"); // is set to Jan 01 Date("2017-06-23T12:00:00-09:45"); // date - time YYYY-MM-DDTHH:MM:SSZ Date("June 23 2017"); // long date format Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone
var d = new Date();
a = d.getDay();     // getting the weekday

getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();          // milliseconds since 1970

// Setting part of a date

var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date

setDate();          // day as a number (1-31)
setFullYear();      // year (optionally month and day)
setHours();         // hour (0-23)
setMilliseconds();  // milliseconds (0-999)
setMinutes();       // minutes (0-59)
setMonth();         // month (0-11)
setSeconds();       // seconds (0-59)
setTime();          // milliseconds since 1970)