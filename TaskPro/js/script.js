let array = [];

class LoginPerson {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    get Email() {
        return this._email;
    }
    set Email(a) {
        if (a.indexOf("@") > 0) {
            this._email = a;
        }
    }
    get Password() {
        return this._password;
    }
    set Password(a) {
        if (a.length > 2) {
            this._password = a;
        }
    }
}

class Person extends LoginPerson {
    constructor(name, email, password) {
        super(email, password);
        this._name = name;
    }
    get Email() {
        return this._email;
    }
    set Email(a) {
        if (a.indexOf("@") > 0) {
            this._email = a;
        }
    }
    get Password() {
        return this._password;
    }
    set Password(a) {
        if (a.length > 2) {
            this._password = a;
        }
    }
    get Name() {
        return this._name;
    }
    set Name(a) {
        this._name = a;
    }
}


function $(id) {
    return document.getElementById(id);
}
function AddRegister() {
    if ($("rePassword").value == $("password").value) {
        let person = new Person($("name").value, $("email").value, $("password").value);
        if (person._name != null && person._email != null && person._password != null) {
            array.push(person);
            console.log(array);
        }
    }
    else {
        alert("password is incorrect");
    }

    return false;
}
function AddLogin() {

    let a = false;
    var user = null;
    for (let k of array) {
        if (k._email == $("loginEmail").value && k._password == $("loginPassword").value) {
            a = true;
            user = k;
        }
    }
    if (a) {
        localStorage.User = JSON.stringify(user);
        location.href = "partSecond.html";
    } else {
        alert("yanlis!!!");
    }
}

let array2 = [];

class Products {
    constructor(name, model, price, color) {
        this._name = name;
        this._model = model;
        this._price = price;
        this._color = color;
    }
    get Name() {
        return this._name;
    }
    set Name(a) {
        this._name = a;
    }
    get Model() {
        return this._model;
    }
    set Model(a) {
        this._model = a;
    }
    get Price() {
        return this._price;
    }
    set Price(a) {
        this._price = a;
    }
    get Color() {
        return this._color;
    }
    set Color(a) {
        this._color = a;
    }
}

let pd1 = new Products("Mac", "3324wewDS", 767, "silver");
let pd2 = new Products("ACER", "332er4DS", 324, "red");
let pd3 = new Products("SAMSUNG", "3we324DS", 532, "black");
let pd4 = new Products("ASUS", "332wewe4DS", 454, "white");


array2.push(pd1, pd2, pd3, pd4);



function Create() {
    let o = JSON.parse(localStorage.pro);
    let pd5 = new Products(o._name, o._model, o._price, o._color);
    array2.push(pd5);
    let container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    for (let i of array2) {
        let t = document.createElement("div");
        t.className = "flex";
        container.appendChild(t);
        let p = document.createElement("p");
        p.className = "p";
        p.innerText = i._name;
        t.appendChild(p);
        let p2 = document.createElement("p");
        p2.className = "p";
        p2.innerText = i._model;
        t.appendChild(p2);
        let p3 = document.createElement("p");
        p3.className = "p";
        p3.innerText = i._price;
        t.appendChild(p3);
        let p4 = document.createElement("p");
        p4.className = "p";
        p4.innerText = i._color;
        t.appendChild(p4);

    }
    let button = document.createElement("button");
    button.className = "btn";
    button.innerText = "ELAVE ET";
    container.appendChild(button);
    button.onclick = function () {
        document.location.href = "partThird.html";
    }
}

array3=[];

function GO() {

    let products = new Products($("name").value, $("model").value, $("price").value, $("color").value);
    let arrayLength = array2.length;
    arrayLength++;
    localStorage.pro = JSON.stringify(products);
    document.location.href = "partSecond.html";

}



function goBack() {

    delete localStorage.User;
    document.location.href = "index.html";

}