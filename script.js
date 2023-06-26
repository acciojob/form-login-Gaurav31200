function getFormvalue() {
    //Write your code here
	const firstInput = document.getElementsByName("fname");
	const secondInput = document.getElementsByName("lname");

	alert(firstInput[0].value + " " + secondInput[0].value);
}
