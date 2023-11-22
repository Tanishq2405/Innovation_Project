// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".card-body h5");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

// Hide the element with classToHide
function hide(classToHide) {	
    [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
        el.hidden = false;
      });  
  }
  
  // Show the element with classToShow
  function show(classToShow) {	
    [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
        el.hidden = true;
      });  
  }
  
  // Event for the checkbox
  document.getElementById('watch').onchange = function() {
      if (this.checked) show('watch'); else hide('watch');
  }
  
  document.getElementById('shirt').onchange = function() {
      if (this.checked) show('shirt'); else hide('shirt');
}

  document.getElementById('jewel').onchange = function() {
      if (this.checked) show('jewel'); else hide('jewel');
}
  document.getElementById('dress').onchange = function() {
      if (this.checked) show('dress'); else hide('dress');
}

  document.getElementById('iwatch').onchange = function() {
      if (this.checked) show('iwatch'); else hide('iwatch');
}

  document.getElementById('shoe').onchange = function() {
      if (this.checked) show('shoe'); else hide('shoe');
}
