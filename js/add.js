let block2 = document.querySelector(".block2")
let grid1 = document.querySelector(".grid")
let span = document.querySelectorAll(".s1")

function table(plc){
    plc.innerHTML = ""
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let tr_thead = document.createElement("tr")
    let td_thead1 = document.createElement("td")
    let td_thead2 = document.createElement("td")
    let td_thead3 = document.createElement("td")
    let td_thead4 = document.createElement("td")
    let td_thead5 = document.createElement("td")
    for(let i= 0 ; i<=6;i++){
        let tr_tbody = document.createElement("tr")
        let td_tbody1 = document.createElement("td")
        let td_tbody2 = document.createElement("td")
        let td_tbody3 = document.createElement("td")
        let td_tbody4 = document.createElement("td")
        let td_tbody5 = document.createElement("td")
        
        td_tbody1.innerHTML = "Переписать проект на Vue 3"
        td_tbody2.innerHTML = "Quia et suscipit\nsuscipit recusandae consequuntur<br>expeditaet cum\nreprehenderit molestiae ut ut quas<br> totam\nnostrum rerum est autem sunt rem eveniet<br>architecto"
        td_tbody3.innerHTML = "21.10.21"
        td_tbody4.innerHTML = "14:31"
        td_tbody5.innerHTML = "Готово"
    
        tr_tbody.append(td_tbody1,td_tbody2,td_tbody3,td_tbody4,td_tbody5)
        tbody.append(tr_tbody)
    }
      
    td_thead1.innerHTML = "Заголовок задачи"
    td_thead2.innerHTML = "Описание задачи"
    td_thead3.innerHTML = "Дата"
    td_thead4.innerHTML = "Время"
    td_thead5.innerHTML = "Выполнено"

    plc.append(table)
    table.append(thead, tbody)
    thead.append(tr_thead)
    tr_thead.append(td_thead1, td_thead2, td_thead3 ,td_thead4,td_thead5)
}

table(block2)   

function grid(plc) {
    plc.innerHTML = ""
    for(let i= 0 ; i<=6;i++){
        let grid_block = document.createElement("div")
        let h3 = document.createElement("h3")
        let p1 = document.createElement("p")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let p2 = document.createElement("p")

        grid_block.classList.add("grid_block")

        h3.innerHTML = "Переписать проект на Vue 3"
        p1.innerHTML = "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        span1.innerHTML = "21.10.21"
        span2.innerHTML = "14:31"
        p2.innerHTML = "В прогрессе"

        grid_block.append(h3,p1,span1,span2,p2)
        plc.append(grid_block)
    }
}


span.forEach(item=>{
    item.onclick=()=>{
        span.forEach(item2=>{
            if(item2.classList.contains("active")){
               item2.classList.remove("active")
            }
        })
        item.classList.add("active")
    }
})

span[1].onclick=()=>{
        setTimeout(() => {
            grid(grid1)
            block2.style.display = "none"
            grid1.style.display = "grid"
        }, 300);
    
    }
    
    span[0].onclick=()=>{
        setTimeout(() => {
            table(block2)   
        block2.style.display = "block"
        grid1.style.display = "none"
        }, 300);
    }