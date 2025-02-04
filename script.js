const button = document.getElementById("send");
const daynight = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")

daynight.addEventListener('click', () => {
    if (body.classList.toggle('dark-mode')) {
        daynight.textContent = '☀️'
    } else {
        daynight.textContent = '🌙'
    }
});

button.addEventListener('click', () => {





    if (input.value === "") {
        alert('bosh joysiz yozin')
    } else {
        const li = document.createElement("li");
        li.className = 'li-element'
        taskList.appendChild(li)


        let a = document.createElement('span');
        a.textContent = input.value;
        li.appendChild(a)

        taskList.appendChild(li)

        const editDelete = document.createElement('div');
        li.appendChild(editDelete)


        const editBtn = document.createElement('button');
        editBtn.textContent = '🖊'
        editDelete.appendChild(editBtn)
        editBtn.style.width = "20px "
        editBtn.style.height = "20px"
        editBtn.style.marginRight = "4px"
        editBtn.style.background = "#6C63FF"
        editBtn.style.color = "black"
        editBtn.style.borderRadius = "3px"
        editBtn.style.border = "none"

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "🪣"
        editDelete.appendChild(deleteBtn);
        deleteBtn.style.width = "20px"
        deleteBtn.style.height = "20px"
        deleteBtn.style.marginRight = "4px"
        deleteBtn.style.background = "#6C63FF"
        deleteBtn.style.color = "black"
        deleteBtn.style.borderRadius = "3px"
        deleteBtn.style.border = "none"




        editBtn.addEventListener('click', () => {
            a.textContent = prompt()
        })
        deleteBtn.addEventListener('click', () => {
            li.remove()
        })
        input.value = ""
    }
})