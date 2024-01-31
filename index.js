const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const listEl = document.querySelector(".list")
let list = (JSON.parse(localStorage.getItem("list")))
list.forEach((task)=>{
    toDoList(task)
})

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList()
})
function toDoList(task){
    let newtask = inputEl.value 
    if(task){
        newtask = task.name
    }
    const liEl = document.createElement("li");

    liEl.innerText = newtask;
    if(task&&task.checked){
        liEl.classList.add("checked");
    }
    listEl.appendChild(liEl)
    inputEl.value = "";
    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = ` <i class="fa-solid fa-square-check"></i>`
    liEl.appendChild(checkBtnEl)
    const trashBtnEl = document.createElement("div")
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl)
    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked")
    })
    trashBtnEl.addEventListener("click",()=>{
        liEl.remove()
    })
    updateLocalStorage()
}
function updateLocalStorage(){
    const liEls = document.querySelectorAll("li")
     list = [];
    liEls.forEach((liEl)=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
        localStorage.setItem("list",JSON.stringify(list))
    })
}