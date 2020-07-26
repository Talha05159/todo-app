var list = document.getElementById("list")

function addTodo () {
    var todoitem = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todoitem.value)
    li.appendChild(liText)


var delButton = document.createElement("button") 
var delText = document.createTextNode("DELETE")  
delButton.setAttribute("class","delbtn")
delButton.setAttribute("onclick","deleteTodo(this)") 
delButton.appendChild(delText)

var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("onclick","editTodo(this)")
editBtn.appendChild(editText)

li.appendChild(delButton)

li.appendChild(editBtn)
    

  

    list.appendChild(li)

    todoitem.value = ""

  //console.log(list)
    

}


   function deleteTodo(e){
       e.parentNode.remove()
   }

   function deleteAll(){
       list.innerHTML = ""
   }
function editTodo(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}