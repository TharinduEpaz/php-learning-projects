const form = document.querySelector("form"); //use the tag name for the query selector
const statusText = form.querySelector(".button-area span");

form.onsubmit = function (e) {
  e.preventDefault();
  statusText.style.display = "block";

  let xhr = new XMLHttpRequest(); //new xml object creating

  // AJAX = Asynchronous JavaScript And XML.
  // AJAX is not a programming language.
  // AJAX just uses a combination of:
  // A browser built-in XMLHttpRequest object (to request data from a web server)
  // JavaScript and HTML DOM (to display or use the data)

  xhr.open("POST", "message.php", true);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) { // no ary errors
      
      let response = xhr.response;

      if(response == "Failed to send your message"|| response == "Email and name fields are required"){
        statusText.style.color = "red";
      }
      else{
        form.reset();
        setTimeout(()=>{
            statusText.style.display = 'none';
        },3000)
      }
      statusText.innerText = response;
    }
  };

  // The readyState property holds the status of the XMLHttpRequest.
  // The onreadystatechange property defines a function to be executed when the readyState changes.
  // The status property and the statusText property holds the status of the XMLHttpRequest object.
  // When readyState is 4 and status is 200, the response is ready:

  let formdata = new FormData(form);
  // The FormData object lets you compile a set of key/value pairs to send using XMLHttpRequest.
  // It is primarily intended for use in sending form data,
  // but can be used independently from forms in order to transmit keyed data.
  // The transmitted data is in the same format that the form's submit() method would use to send the data if the form's encoding type were set to multipart/form-data.

  xhr.send(formdata);
};
