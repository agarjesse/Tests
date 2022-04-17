const introContainer = document.createElement('div');

const introText = document.createElement('p');
introText.textContent = "test";

introContainer.appendChild(introText);

const existingDiv = document.querySelector('#firstDiv');


console.log('test');

existingDiv.appendChild(introContainer);
