 document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Get all the elements with the class 'date' inside 'ul' and iterate through them
    document.querySelectorAll('.ul .date').forEach(function(dateElement) {
      // Parse the date from the element's text content
      var eventDate = new Date(dateElement.textContent);

      // Compare the current date with the event date
      if (eventDate < currentDate) {
        // If the event date is in the past, remove the parent 'li' element
        dateElement.closest('li').remove();
      }
    });
  });
