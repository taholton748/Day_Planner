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
// Display today's day and date

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save input in local storage
    localStorage.setItem(time, text);
  });
  // loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // Conditionals to add and remove classes to indicate past,
    //present and future
    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
});
