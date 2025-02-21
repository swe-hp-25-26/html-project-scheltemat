// Initialize Email.js
(function() {
  emailjs.init('_h7sXxAQEl7_FwTb6'); // Replace with your Email.js public key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  console.log('Form Data:', formData);

  // Send the email using Email.js
  emailjs.send('service_0tuqcir', 'template_khbnh1p', formData)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send the message, please try again.');
    });
});