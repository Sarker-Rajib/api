function loadData2(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => res.json())
   .then(json => console.log(json))
}

function loadData3(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(json => console.log(json))
}


// ************************
function loadData4(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => crackData(data))
};

function crackData(data){
   for(const user of data){
      console.log(user);
   }
}
//****************************


// ******************************************************
function loadData8(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayData(data))
};

function displayData(data){
   const ul = document.getElementById('user-list');
   
   for(const user of data){
      const li = document.createElement('li');
      li.innerText = user.name;
      ul.appendChild(li);
   }
}
// ******************************************************