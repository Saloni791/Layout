// var page = document.querySelector('.outer main');
//  var todo =  `<div class="todo">
//                 <header>
//                     <span>Title of task</span>
//                 </header>
//                 <div class="todo-text">
//                     <textarea></textarea>
//                 </div>
//                 </div>`;


//  function add(){
//  page.innerHTML += todo;
// }

// add();
// add();


var page = document.querySelector('.outer main');
var dialogbox = document.querySelector('.dialogbox');

function add() {
    dialogbox.style.display = 'flex';
}

function addTodo() {
    let title = document.getElementById("task-title");
    let description = document.getElementById("task-description");

    if (title.value == "" || description.value == "") {
        alert("Please Fill The Fields!");
        return;
    }
    var todo = `<div class="todo" >
                    <header>
                    <span>${title.value}</span>
                    <span class="minimize">_</span>
                    <span class="close">X</span>
                    </header>
                    <div class="todo-text">
                    <textarea>${description.value}</textarea>
                    </div>
                </div>`;
    page.innerHTML += todo;
    title.value = "";
    description.value = "";
    dialogbox.style.display = 'none';



    let todoArr = document.querySelectorAll(".todo")
    console.log(todoArr.length);
    for (var i = 0; i < todoArr.length; i++) {
        todoArr[i].querySelector(".close").addEventListener("click", function (e) {
            console.log(e.target.closest(".todo").remove());

        });

        todoArr[i].querySelector(".minimize").addEventListener("click", function (e){
          let box =  (e.target.closest(".todo"));
            let todoText = box.querySelector(".todo-text");
            if(todoText.style.display != "none"){
                box.style.height = "30px";
                todoText.style.display = "none";
            }else{
                box.style.height = "300px";
                todoText.style.display = "block";
            }
        });
    }
}


function close() {

}