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

    childEle.innerHTML += `<li>${obj.name} - ${obj.email} - ${obj.phone}</li>`;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button"
    deleteButton.value = "Delete"

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentEle.removeChild(childEle)
    }

    const editing = document.createElement('input');
    editing.type = "button"
    editing.value = "Edit"

    editing.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentEle.removeChild(childEle)
        document.getElementById('unameInputTag').value = obj.name
        document.getElementById('uemailInputTag').value = obj.email
        document.getElementById('uphoneInputTag').value = obj.phone
    }

    childEle.appendChild(deleteButton)
    childEle.appendChild(editing)
    parentEle.appendChild(childEle)
}
