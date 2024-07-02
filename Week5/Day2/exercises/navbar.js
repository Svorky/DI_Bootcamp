// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.querySelector("div")
div.setAttribute('id', 'socialNetworkNavigation')
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let newLi = document.createElement('li')
let newTextNode = document.createTextNode('Logout');
newLi.appendChild(newTextNode)
let ul = document.querySelector("ul")
ul.appendChild(newLi)
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
console.log(ul.firstElementChild.textContent); 
console.log(ul.lastElementChild.textContent); 
