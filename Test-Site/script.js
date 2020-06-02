input = document.getElementById('input')
sbmt = document.getElementById('submit')
headingOne = document.getElementsByTagName('h1')[0]
title = document.getElementsByTagName('title')[0]

sbmt.addEventListener("click", () => {
	if (input.value == "password"){
		headingOne.innerHTML = "CORRECT!!!!!!!!"
		title.innerHTML = "Correct"
	}
})