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

/*This is an async function. It returns a promises. It uses the await keyword to wait until the promise is reolved.
   * the result of the promise is stored in a variable and the used as data for the statement below. After the data 
   * is recieved, it is looped through with a forEach method and then the result is appended to the ul.

  */

async function getFacts() {
  try {
    let response = await fetch("https://catfact.ninja/facts");
    let jsonData = await response.json();
    let factsData = await jsonData.data;

    let html = "";
    factsData.forEach((element) => {
      html += `<li>${element.fact}</li>`;
    });
    facts.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

//getFacts();

/* This function is similar to the one above, however, because async returns a promise, we use the .then method after
 * the function is called to get the data and then loop through it
 */
async function getFacts2() {
  try {
    let response = await fetch("https://catfact.ninja/facts");
    let jsonData = await response.json();
    let factsData2 = await jsonData.data;
    return factsData2;
  } catch (error) {
    console.log(error);
  }
}

getFacts2().then((factsData2) => {
  let html = "";
  factsData2.forEach((element) => {
    html += `<li>${element.fact}</li>`;
  });
  facts.innerHTML = html;
});

/*console.log(element.fact);
console.log(factsData);
html = `<li> ${data.data[0].fact} <li/>`; */

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
