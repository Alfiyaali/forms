let myObj = {
    name : "Alfiya",
    email : "alfiyaali177@gmail.com",
    phone : 7000894121,
    date : "22/10/1197",
    time : "10:10"
};

let myObj_serialized = JSON.stringify(myObj);
console.log(myObj_serialized);

localStorage.setItem("myObj",myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);