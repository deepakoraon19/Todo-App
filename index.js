let input = document.querySelector(".input-txt-box")
let tasksContainer = document.querySelector(".tasks")
input.addEventListener('keypress', (event)=>{   
    if(event.key==="Enter"){
        console.log(input.value)
        renderData(input.value)
    }
})

let renderData = (data)=>{

    let taskBox = document.createElement("div")
    let text = document.createElement("span")
    let circle = document.createElement("div")
    let cross = document.createElement("img")
    let line = document.createElement("hr")

    text.textContent=data;
    text.classList.add("txt")
    circle.classList.add("circle")
    taskBox.appendChild(circle)
    taskBox.appendChild(text)
    taskBox.classList.add("flex")
    taskBox.classList.add("txt-box")
    tasksContainer.appendChild(taskBox)
    tasksContainer.append(line)
}