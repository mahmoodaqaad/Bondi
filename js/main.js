//Start  our work 
let swichli = document.querySelectorAll(".our-work ul li")
let allbox = document.querySelectorAll(".our-work .box ")
console.log(swichli)
swichli.forEach(li => {
    li.onclick = () => {
        swichli.forEach(li => li.classList.remove("active"))
        li.classList.add("active")
        mangerImg(li);

    }
})
function mangerImg(li) {
    allbox.forEach(box => {
        box.parentElement.style.display = "none"
    })
    document.querySelectorAll(li.dataset.filter).forEach(e => {
        e.parentElement.style.display = "block"
    })

}
//End  our work 
console.log(document.querySelector(".navbar .search"))
document.querySelector(".navbar .search").onclick = () => {
    document.querySelector(".serchinput").classList.toggle("active")

}