// Rewrite the following code using async/await.

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500


// Solution
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('http://httpstat.us/500')
    .catch(alert); // Error: 500 (4)



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Call the async function in the regular function f(). How could we do this since we can't use await in f()?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
  }

  // Solution
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => alert(result));
  }
  
  f();