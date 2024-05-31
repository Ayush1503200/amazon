function initializePlaceholders() {
    var inputFields = document.querySelectorAll('input[data-placeholder]');

    inputFields.forEach(function(input) {
      var placeholderText = input.getAttribute('data-placeholder');

      input.value = placeholderText;

      input.addEventListener('focus', function() {
        if (input.value === placeholderText) {
          input.value = '';
        }
      });

      input.addEventListener('blur', function() {
        if (input.value === '') {
          input.value = placeholderText;
        }
      });
    });
  }

  // Call the function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializePlaceholders();
  });
