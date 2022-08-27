function loadUsers(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayUsers11(data))
};

function displayUsers11(data){
   console.log(data);
}