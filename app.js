 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

 let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]
console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20
console.log(arrayOfTodos[0].title) 
console.log(arrayOfTodos[1].title) 

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}


const populateTodos = () => {
for (let i=0; i<arrayOfTodos.length; i++) {
  let title=document.getElementById("todo-list")
  var li=document.createElement('li');
  var text = document.createTextNode(arrayOfTodos[i].title)
  li.appendChild(text)
  title.appendChild(li)
}
}

const ByUserId = () => {
  for (let i=0; i<arrayOfTodos.length; i++<9) {
    let userId=document.getElementById("todo-list")
    var li=document.createElement('li');
    var text = document.createTextNode(arrayOfTodos[i].userId)
    li.appendChild(text)
    userId.appendChild(li)
  }
  }
const clear_inputs =() => { 
  input=document.getElementByID('todo-list')
  for(input of inputs){
    input.id=' ' ///this emptys the inputs
  }
}
  // Use a JS Method to find all Li's
  
const arrayOfTodos1 = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20
