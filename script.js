
function savetToLocalStorage(event){
    event.preventDefault();
    

    const name = event.target.uname.value;
    const email = event.target.uemail.value;
    const phone = event.target.uphone.value;

    const obj = {
        name,
        email,
        phone
    }

    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUserOnScreen(obj);

}

function showUserOnScreen(obj){
    const parentEle = document.getElementById('listofItems');
    // const childEle = document.createElement('li');

    // childEle.textContent = obj.name +' - '+obj.email+' - '+obj.phone;
    // parentEle.appendChild(childEle);

    parentEle.innerHTML += `<li>${obj.name} - ${obj.email} - ${obj.phone}</li>`;
}
