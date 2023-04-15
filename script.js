function getFormvalue() {
    //Write your code here
	let fname = document.getElementsByName("fname");
	let lname = document.getElementsByName("lname");
	alert(fname[0].value + " " + lname[0].value);
}
