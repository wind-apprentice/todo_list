const input_task = document.getElementById("input-task");
const input_button = document.getElementById("input-task-button");
const todo_list = document.getElementById("todo-list");
const list_container = document.getElementById("list-container");

function add_task(){
    if(input_task.value==''){
        alert("write task before adding");
    }
    else{
        let new_task = document.createElement("li");
        new_task.innerHTML = input_task.value;
        list_container.appendChild(new_task);
        let delete_button = document.createElement("Span");
        delete_button.innerHTML = "X";
        new_task.appendChild(delete_button);
        input_task.value="";
    }
    saveData();
}

todo_list.addEventListener("click",function(e){
    if(e.target.tagName == "BUTTON"){
        add_task();
    }
    else if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
    /*else if(e.target.tagName == "SPAN")*/
    //else alert(e.target.tagName);
},false);

todo_list.addEventListener("mouseover",function(e){
    if(e.target.tagName == "LI" ){
        //alert("hi");
        let li = e.target;
        let span = li.children[0];
        span.style.visibility = "visible";
    }
    else if(e.target.tagName == "SPAN"){
        let span = e.target;
        span.style.visibility = "visible";
    }
    saveData();
},false);

todo_list.addEventListener("mouseout",function(e){
    if(e.target.tagName == "LI"){
        let li = e.target;
        let span = li.children[0];
        span.style.visibility = "hidden";
    }
    saveData();
},false);

// save data to browser local storage
function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

//load data every time we load page
function loadData(){
    list_container.innerHTML = localStorage.getItem("data");
}
loadData();

/*
document.addEventListener("load",function(e){
    list_container.innerHTML = localStorage.getItem("data");
},false);

/*
todo_list.addEventListener("click",function(e){
    alert(e.target.tagname);
    if(e.target.tagname=="button"){
        add_task();
    }
},false);
*/
/*
input_button.addEventListener("click",function(e){
    add_task();
},false);
*/
