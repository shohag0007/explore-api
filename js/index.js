function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => displayData2(data))


}

function displayData2(data){
    const ul = document.getElementById('users-list');
   for(const user of data){
    console.log(data.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
   }

}
