/*=============== Typing Animation =================*/


var typed = new Typed(".typing", {
	strings:["maintainer", "Web developer", "Freelancer", "Web Designer", "Graphic Designer"],
	typedSpeed: 3000,
	BackSpeed:1000,
	loop:true
})

/*=============== theme light and dark colors =================*/

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const style_switcher = document.querySelector(".style-switcher");

style_switcher.addEventListener("click", () =>{
	document.body.classList.toggle("light");

})
	// ============== ASIDE bar opener Start=============== 

const hamubuger_menu = document.querySelector(".hamubuger-menu");
const main_container = document.querySelector(".main-container");

hamubuger_menu.addEventListener("click", () =>{
	main_container.classList.toggle("active");
})

window.addEventListener("scroll", () =>{
	if (main_container.classList.contains("active")) {
		main_container.classList.remove("active");
	}
})

	// ============== nav bar color changer=============== 
window.addEventListener('scroll', () => {
	document.querySelector('#nav').classList.toggle('scroll', window.scrollY > 20)
})