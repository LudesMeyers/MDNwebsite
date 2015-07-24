var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/volvox-whole.jpg') {
		myImage.setAttribute('src', 'images/fuel1.jpg');
}	else {
		myImage.setAttribute('src', 'images/volvox-whole.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Biofuels are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}	else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Biofuels are cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}