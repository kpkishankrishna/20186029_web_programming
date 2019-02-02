var rnum;
var count = 3;
// function count(argument) {
// 	// body...
// }

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function load() {
	rnum = getRndInteger(1, 9);
	count = 3;
console.log(rnum);
	var a = "";
	for (var i = 1; i <= 9; i++) {
		a += '<button class="btn btn-primary" onclick="check(this)">'+i+'</button>';

	}
	document.getElementsByClassName("main")[0].innerHTML= a;
	// newtable();
}
function check(element) {
		if(rnum == element.innerHTML) {
		element.innerHTML = "bomb found";
		var all = document.getElementsByClassName('btn btn-primary');
		for (var i = all.length - 1; i >= 0; i--) {
				console.log(all[1]);
				all[i].disabled = true;
			}
		alert("You Won");
		// printwin();
		nextline1();
		// document.getElementById("input").reset();
		// document.getElementById("4").innerHTML = "You Won";
		// nextline2();
		// nextline3();

		}
		
		else{
			element.innerHTML = "no bomb";
			count--;
		}
		alert(count);
		
		element.disabled = true;
		document.getElementById("update").innerHTML = count;
		if (count == 0) {
			console.log("count in count=0 : "+count);
			var all = document.getElementsByClassName('btn btn-primary');
			for (var i = all.length - 1; i >= 0; i--) {
				console.log(all[1]);
				all[i].disabled = true;

			}
			alert("You Lose");
			// document.getElementById("input").reset();
			// print();
			// console.log(document.getElementById("firstname").value);
			// console.log("hi");
			nextline2();
			// document.getElementById("4").innerHTML = "You Lost";
			count = 3;
			// for (var i = 10 - 1; i >= 0; i--) {
			// 	document.getElementByClassName("grid-item").disabled = true;
			// 	}
			}

}
function print() {

	document.getElementsByClassName("details")[0].innerHTML += document.getElementById("firstname").value +
	+ document.getElementById("lastname").value + "	 " + count +"	 "+"You Lose";

}
function printwin() {

	document.getElementsByClassName("details")[0].innerHTML += document.getElementById("firstname").value + "	 "
	+ document.getElementById("lastname").value + "	 " + count +"	 "+"You Won";

}
// function print1(argument) {
// 	document.getElementById("fn").innerHTML = document.getElementById("firstname").value;
// 	document.getElementById("sn").innerHTML = document.getElementById("firstname").value;
// 	document.getElementById("sc").innerHTML = count;
// 	// document.getElementById("re").innerHTML = 
// }
function nextline1() {
  var h = document.getElementById("1");
  h.insertAdjacentHTML("afterbegin",document.getElementById("firstname").value+'<br>');
  var g = document.getElementById("2");
  g.insertAdjacentHTML("afterbegin",document.getElementById("lastname").value + '<br>');
  var i = document.getElementById("3");
  i.insertAdjacentHTML("afterbegin", count + '<br>');
  var j = document.getElementById("4");
  j.insertAdjacentHTML("afterbegin", "You Won" + '<br>');
 }function nextline2() {
  var h = document.getElementById("1");
  h.insertAdjacentHTML("afterbegin",document.getElementById("firstname").value+'<br>');
  var g = document.getElementById("2");
  g.insertAdjacentHTML("afterbegin",document.getElementById("lastname").value + '<br>');
  var i = document.getElementById("3");
  i.insertAdjacentHTML("afterbegin", count + '<br>');
  var j = document.getElementById("4");
  j.insertAdjacentHTML("afterbegin", "You Lose"+ '<br>');
 }
 function reset() {
 	document.getElementById("input").reset();
 	document.getElementsByClassName("grid-container main")[0].innerHTML = "" ;
 	validateForm();

 }
 function validateForm() {
  var x = document.forms["input"]["firstname"].value;
  var y = document.forms["input"]["lastname"].value;
  console.log(x);
  console.log(y);
  if (x == "" || y == "") {
    return false;
  }
  else {
  	load();
  }
  var d = document.forms["input"]["firstname"];
  d.disabled = true;
}
 // function nextline2() {
 // 	var g = document.getElementById("sn");
 //  g.insertAdjacentHTML("afterend",document.getElementById("lastname").value);
 // }
// function nextline3() {
//   	var i = document.getElementById("sc");
//   i.insertAdjacentHTML("afterend", count);
//   }  
  

// var info(f)


// for (var i = 10 - 1; i >= 0; i--) {
// 				all[i].classList.add("disabledDiv");
// 			}
// function newtable() {
// 	var b = "<tr>";
// 	for (var i = 0; i < 3; i++) {
// 		b += '<td id = " '+i +' "></td>';
// 	}
// 	b += "</tr>";
// }