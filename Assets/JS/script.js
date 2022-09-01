// the current day is displayed at the top of the calendar
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

// I am presented with timeblocks for standard business hours
// each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
