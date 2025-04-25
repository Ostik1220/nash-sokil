const headerLanguageChange = document.querySelector("#languageHeader")
const headerUkranie = document.querySelector("#ukraine")
const headerUSA = document.querySelector("#usa")
const languageHeaderArrow = document.querySelector("#languageHeaderArrow")
console.log(headerUSA)
headerLanguageChange.addEventListener("click", (e) => {
    console.log(e)
    document.querySelector("#languageHeaderArrow").style.transform = "rotate(180deg)"
    headerUSA.style.visibility = "visible"
    headerUSA.style.cursor = "pointer";
    headerUkranie.style.visibility = "visible"
    headerUkranie.style.cursor = "pointer";
})
headerUSA.addEventListener("click", () =>{
        document.querySelector("#languageHeaderArrow").style.transform = "rotate(360deg)"
        headerUSA.style.top = "45px"
        headerUkranie.style.visibility = "hidden"
        headerUkranie.style.cursor = "none"
        headerUkranie.style.top = "80px"
        
})
headerUkranie.addEventListener("click", () =>{
    document.querySelector("#languageHeaderArrow").style.transform = "rotate(360deg)"
    headerUkranie.style.top = "45px"
    headerUSA.style.visibility = "hidden"
    headerUSA.style.cursor = "none"
    headerUSA.style.top = "80px"
    
})