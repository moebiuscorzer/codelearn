document.getElementById("load").onclick = function () {
  /*
  const req = new XMLHttpRequest();
  req.open("GET", "/api/products");
  req.onload = function () {
    const data = JSON.parse(req.response);
    addList({ data });
  };

  req.send();
  */

  const productId = document.getElementById("product-id").value;
  if (productId === "") {
    /* axios is Promise-based
     This can be seen through the "then" function
     which takes a callback (function) as input.
     By default, the result of the GET request
     performed by axios will be fed as an object
     argument to the callback (here, "addList")
  */
    axios.get("/api/products").then(addList);
  } else {
    axios
      .get(`/api/products/${productId}`)
      .then(addSingle)
      .catch((err) => {
        if (err.response.status === 404) {
          notFound();
        }
      });
  }
};

function addList({ data }) {
  resetContentArea(); // content area is reset to avoid adding the list infintely

  const template = document.querySelector("#list-result"); // load an HTML template  "#list-result"
  const clone = template.content.cloneNode(true);

  const ul = clone.querySelector("ul"); // initialise a list element
  data.forEach((d) => {
    // populate the list
    const li = clone.querySelector("li").cloneNode(true); // create an list item
    const id = li.querySelector("#product-id"); // use a template
    id.textContent = d.id; // set text content
    id.onclick = (e) => {
      document.getElementById("product-id").value = e.currentTarget.textContent;
    };
    li.querySelector("#product-name").textContent = d.name; // set text content
    li.querySelector("#product-price").textContent = d.price; // set text content

    ul.appendChild(li); // add the list item
  });

  results.appendChild(clone); // add the cloned item to the document
}

function addSingle({ data }) {
  resetContentArea();
  const template = document.querySelector("#result");

  const clone = template.content.cloneNode(true);
  clone.querySelector("#title").textContent = data.name;
  clone.querySelector("#price").textContent = data.price;
  clone.querySelector("#quantity").textContent = data.quantity;
  clone.querySelector("#color").textContent = data.color;
  clone.querySelector("#description").textContent = data.description;

  results.appendChild(clone);
}

function notFound() {
  resetContentArea();

  const h2 = document.querySelector("h2.hidden");
  h2.className = "";
}

function resetContentArea() {
  document.querySelector("h2").className = "hidden";
  const currentProduct = document.getElementById("product-result");
  if (currentProduct) {
    currentProduct.remove();
  }
  const productList = document.getElementById("product-list");
  if (productList) {
    productList.remove();
  }
}
