// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function HourtoMinute(Hour) {
    const minute = Hour * 60;
    return minute;
}
const hour = 6;
console.log(hour, " hour convert to minute: ", HourtoMinute(hour));
