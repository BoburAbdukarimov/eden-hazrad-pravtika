window.addEventListener("DOMContentLoaded", () => {
	const tabParent = document.querySelector(".tabheader__items"),
	      tabs = document.querySelectorAll(".tabheader__item"),
				tabContent = document.querySelectorAll(".tabcontent");

				function hidetabContent() {
					tabContent.forEach((item)=>{
						item.style.display = "none"
					})
					tabs.forEach((item) =>{
						item.classList.remove("tabheader__item_active")
					})
				}
				function showtabContent(i=0) {
					tabContent[i].style.display = "block";
					tabs[i].classList.add("tabheader__item_active")
				}
				hidetabContent()
				showtabContent()

				tabParent.addEventListener("click", (event)=>{
					const target = event.target
					if(target&& target.classList.contains("tabheader__item")){
						tabs.forEach((item, idx)=>{
							if(target == item){
								hidetabContent()
								showtabContent(idx)
							}
						})
					}
				})

}) 