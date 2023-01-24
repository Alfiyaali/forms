const { Children } = require("react");

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
    const childEle = document.createElement('li');

    // childEle.textContent = obj.name +' - '+obj.email+' - '+obj.phone;
    // parentEle.appendChild(childEle);

    childEle.innerHTML += `<li>${obj.name} - ${obj.email} - ${obj.phone}</li>`;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button"
    deleteButton.value = "Delete"

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentEle.removeChild(childEle)
    }

    childEle.appendChild(deleteButton)
    parentEle.appendChild(childEle)
}
