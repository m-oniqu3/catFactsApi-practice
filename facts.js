let facts = document.querySelector(".facts");

//Getting cat facts through fetch
//call fetch with the url
//use then to get the reponse and use the .json method to parse it and return it to the next then method

/* then we take the data we got returned from above as a parameter
 * the data is one big object and the facts we need are in the
 * property called data which is an array containing the facts.
 * so we access the data through dot notation and the access the facts * through the forEach method since info.data is an array.
 * The html variable creates and appends a list-item with the fact.
 * The facts are then added to the ul element
 */

/*
fetch("https://catfact.ninja/facts")
  .then((response) => {
    return response.json();
  })

  .then((info) => {
    console.log(info);
    let html = "";
    info.data.forEach((element) => {
      console.log(element.fact);
      html += `<li>${element.fact}</li>`;
    });
    facts.innerHTML = html;
  })

  .catch((err) => {
    console.log(err, "Something went wrong");
  });
*/

//html = `<li> ${data.data[0].fact} <li/>`;

/*Getting Cat facts with XML*/

//initialized a new request
const xhr = new XMLHttpRequest();

//specified the type of request and to where it is being made
xhr.open("GET", "https://catfact.ninja/facts", true);

//used onload to check for the readystate (4)
xhr.onload = function () {
  let html = "";
  //checked if the status is 200. If it is we get the response and parse it
  if (this.status == 200) {
    //console.log(this.responseText);
    info = JSON.parse(this.responseText);
    //console.log(info);

    //looped through the data
    info.data.forEach((element) => {
      //console.log(element.fact);
      html += `<li>${element.fact}</li>`;
    });
  } else {
    console.log("Something went wrong. Could not get data");
  }
  //appended the data to the ul
  facts.innerHTML = html;
};

//send the request
xhr.send();
