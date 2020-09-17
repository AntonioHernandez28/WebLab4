function PostTodo() {
    var li = document.createElement("li");
    var TodoInput = document.getElementById("todoText").value;
  	var todoNode = document.createTextNode(TodoInput);
  	var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "todo";
            checkbox.value = 1;
        
    li.appendChild(checkbox);
  	li.appendChild(todoNode);

  	if (TodoInput == '') {
    	alert("To do can not be empty");
  	} else {
    	document.getElementById("todoUL").appendChild(li);
  	}
      document.getElementById("todoText").value = ""; 
}

function clearTodo(){
	for (var iCounter = document.getElementsByName("todo").length - 1; iCounter >= 0; iCounter--) {
		if (document.getElementsByName("todo")[iCounter].checked) {
			document.getElementsByName("todo")[iCounter].click();
		}
	}
}

function markAll(){
	for (var iCounter = document.getElementsByName("todo").length - 1; iCounter >= 0; iCounter--) {
		if (!document.getElementsByName("todo")[iCounter].checked) { // same as clearTodo but with the oposite if statement
			document.getElementsByName("todo")[iCounter ].click();
		}
	}
}

function deleteTodo(){
	document.getElementById("todoUL").innerHTML = "";;
	
}



