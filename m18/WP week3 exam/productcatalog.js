
	var phone1 = {
			title: "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			description: "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			image: "1.jpeg",
			quantity:"10"
		}
	var phone2 = {
			title: "Mi A2 4GB + 64GB | 6GB + 128GB",
			description: "15.2cm (5.99) large display",
			image: "2.jpeg",
			quantity:"20"
		}
	var phone3 = {
			title: "Apple iphone 32GB",
			description: "11.4 cm(4.7)display",
			image: "3.jpeg",
			quantity:"30"
		}
	var phone4 ={
			title: "red mi note 6 pro",
			description: "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			image: "4.jpeg",
			quantity:"40"
		}
function load() {
	document.getElementById('info11').innerHTML = phone1.title +'<br>'+ phone1.description +'<br>'+ phone1.quantity;
	document.getElementById('info22').innerHTML = phone2.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
	document.getElementById('info33').innerHTML = phone3.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
	document.getElementById('info44').innerHTML = phone4.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
}
document.getElementById('info1').innerHTML = phone1.title +'<br>'+ phone1.description +'<br>'+ phone1.quantity;
document.getElementById('info2').innerHTML = phone2.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
document.getElementById('info3').innerHTML = phone3.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
document.getElementById('info4').innerHTML = phone4.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;

document.getElementById('info11').innerHTML = phone1.title +'<br>'+ phone1.description +'<br>'+ phone1.quantity;
document.getElementById('info22').innerHTML = phone2.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
document.getElementById('info33').innerHTML = phone3.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;
document.getElementById('info44').innerHTML = phone4.title +'<br>'+ phone2.description +'<br>'+ phone3.quantity;

function delete1() {
	// phone1.title = "";
	// phone1.description = "";
	// phone1.quantity = "";
	// load();
	
	document.getElementsByClassName('p1')[0].innerHTML = "";
}function delete2() {
	// phone2.title = "";
	// phone2.description = "";
	// phone2.quantity = "";
	// load();
	document.getElementsByClassName('p2')[0].innerHTML = "";
}function delete3() {
	// phone3.title = "";
	// phone3.description = "";
	// phone3.quantity = "";
	// load();
	document.getElementsByClassName('p3')[0].innerHTML = "";
}function delete4() {
	// phone4.title = "";
	// phone4.description = "";
	// phone4.quantity = "";
	// load();
	document.getElementsByClassName('p4')[0].innerHTML = "";
}
function myimage() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "2.jpeg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}
function edit1() {
	var x ='Title:'+'<br>' + '<input type="text" id="title1">' +'<br>'+ 'Discription:' +'<br>' +'<input type="text" id="disc1">'+
	'Quantity:' + '<br>' +'<input type="text" id="quantity1">';
	document.getElementById("ed1").innerHTML = x;
	phone1.title = document.forms["ed11"]["title1"].value;
	phone1.description = document.getElementById("title1").value;
	phone1.quantity = document.getElementById("title1").value;
}function edit2() {
	var x ='Title:'+'<br>' + '<input type="text" id="title12">' +'<br>'+ 'Discription:' +'<br>' +'<input type="text" id="disc12">'+
	'Quantity:' + '<br>' +'<input type="text" id="quantity12">';
	document.getElementById("ed2").innerHTML = x;
	phone2.title = document.getElementById("title12").value;
	phone2.description = document.getElementById("title12").value;
	phone2.quantity = document.getElementById("title12").value;
}function edit3() {
	var x ='Title:'+'<br>' + '<input type="text" id="title13">' +'<br>'+ 'Discription:' +'<br>' +'<input type="text" id="disc13">'+
	'Quantity:' + '<br>' +'<input type="text" id="quantity13">';
	document.getElementById("ed3").innerHTML = x;
	phone3.title = document.getElementById("title13").value;
	phone3.description = document.getElementById("title13").value;
	phone3.quantity = document.getElementById("title13").value;
}function edit4() {
	var x ='Title:'+'<br>' + '<input type="text" id="title14">' +'<br>'+ 'Discription:' +'<br>' +'<input type="text" id="disc14">'+
	'Quantity:' + '<br>' +'<input type="text" id="quantity14">';
	document.getElementById("ed4").innerHTML = x;
	phone4.title = document.getElementById("title14").value;
	phone4.description = document.getElementById("title14").value;
	phone4.quantity = document.getElementById("title14").value;
}