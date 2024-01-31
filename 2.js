const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const ulEl = document.querySelector(".list")
let list = JSON.parse(localStorage.getItem("list"))
list.forEach((task)=>{
    toDoList(task)
})


formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    toDoList()
})

function toDoList(task){
    let  newtask = inputEl.value
    if(task){
        newtask = task.name
    }
    let liEl = document.createElement("li")
    if(task && task.checked){
        liEl.classList.add("checked")
    }
    liEl.innerText = newtask
    ulEl.appendChild(liEl)
    let checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    liEl.appendChild(checkBtnEl)
    let trashBtnEl = document.createElement("div")
    trashBtnEl.innerHTML= `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl)
    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked")
    })
    trashBtnEl.addEventListener("click",()=>{
        liEl.remove()
    })
    inputEl.value = ""
    localStorageUpdate()
}

function localStorageUpdate(){
    let liEls = document.querySelectorAll("li")
    list = []
    liEls.forEach((liEl)=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list))
}