function highlight(e) {
  e.srcElement.style.backgroundColor = "red";
  e.srcElement.style.opacity = 0.3;
  e.srcElement.style.zIndex = 5000;
  //console.log("name: " + e.srcElement.nodeName + ", tagname: " + e.srcElement.tagName + ", classname: " + e.srcElement.className);
}

function removekey(e) {
	var chCode = ('charCode' in e) ? e.charCode : e.keyCode;
	if (chCode == 13 /*enter*/)
	  e.srcElement.parentNode.removeChild(e.srcElement);
  //console.log(e.srcElement);
}

function removeclick(e) {
	e.srcElement.parentNode.removeChild(e.srcElement);
  //console.log(e.srcElement);
}

function lowlight(e) {
  e.srcElement.style.backgroundColor = "transparent";
  e.srcElement.style.opacity = "initial";
  e.srcElement.style.zIndex = "initial";
  //console.log(e.srcElement);
}

var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++){
	divs[i].addEventListener('mouseover', highlight);
	divs[i].addEventListener('click', removeclick);
	//divs[i].addEventListener('keypress', removekey);
	divs[i].addEventListener('mouseout', lowlight);
//	console.log("div: " + divs[i].nodeName + ", tagname: " + divs[i].tagName + ", classname: " + divs[i].className + ", id: " + divs[i].id);
}
