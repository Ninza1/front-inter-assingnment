
// header =================
let nav = document.getElementById("nav");

function menuOpen() {
    nav.style.left = "50%"
}
function menuClose() {
    nav.style.left = "100%"
}

// Dashboard Section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function megaMenu() {
    let child1 = document.getElementsByClassName("container-child1")[0];
    let child1_lies = document.querySelectorAll(".child1-li");
    let child1_a = document.querySelectorAll(".child1-li>a");
    if(window.visualViewport.width > 600){

  
    if (child1.style.width !== "10%") {
        child1.style.width = "10%"
        i = 0;
        child1_a.forEach(function (e) {
            e.style.fontSize = "0.7rem"
            child1_lies[i].style.flexDirection = "column";
            i++
        })
        // }, 150);

        return;

    }
    else {
        child1.style.width = "25%"
        i = 0
        child1_a.forEach(function (e) {
            e.style.fontSize = "1.2rem"
            child1_lies[i].style.flexDirection = "row"
            i++
        })

    }
}
else {
    if (child1.style.width !== "10%") {
        child1.style.width = "10%"
        child1.style.left= "-8%"
        i = 0;
        child1_a.forEach(function (e) {
            e.style.fontSize = "0.7rem"
            child1_lies[i].style.display = "none";
            child1_lies[i].style.flexDirection = "column";
            i++
        })
        // }, 150);

        return;

    }
    else {
        child1.style.width = "50vw"
        child1.style.left= "0"
        i = 0
        child1_a.forEach(function (e) {
            e.style.fontSize = "1.2rem"
            child1_lies[i].style.display = "flex";
            child1_lies[i].style.flexDirection = "row"

            i++
        })

    }
}

}

// Form Pop Up ===============================================>

function addEmploy(e) {
    let form = document.querySelectorAll(".form-common")[e];
    form.style.height = "100vh"
}
function closeForm(e) {
    let form = document.querySelectorAll(".form-common")[e];
    form.style.height = "0"
}

// Form data form User ========================================


let getData = JSON.parse(localStorage.getItem("UserData"));
const saveData = (e) => {
    let userObj = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
    }
    let updateObj = {
        name: document.getElementById("updateName").value,
        phone: document.getElementById("updatePhone").value,
        email: document.getElementById("updateEmail").value,
        city: document.getElementById("updateCity").value,

    }

    const { name, phone, email, city } = userObj;
    if (name && phone && email && city) {
        if (getData) {

            getData.push(userObj);
            localStorage.setItem('UserData', JSON.stringify(getData))
        } else {
            let newArr = []
            newArr.push(userObj);
            localStorage.setItem('UserData', JSON.stringify(newArr))
        }
    }
    // else if (updateObj.name && updateObj.phone && updateObj.email && updateObj.city) {
    //     console.log(getData)
    // }

}

// Table section ===========================================

let table = document.querySelector("table");
let pageInput = document.getElementById("input");
const mapData = (x) => {
    console.log("out", x, pageInput.value)
    table.innerHTML = null;
    if (getData) {
        console.log("in", x)
        table.innerHTML = ` <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>City</th>
        <th>Action</th>
        </tr>`
        // getData.map((e, i) => {
        for (let i = 0; i < pageInput.value; i++) {
            // console.log(e)
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            td1.innerHTML = getData[i].name;
            td2.innerHTML = getData[i].phone;
            td3.innerHTML = getData[i].email;
            td4.innerHTML = getData[i].city;
            td5.innerHTML = ` <ion-icon name="pencil" onclick="addEmploy(1,${i})"></ion-icon>
                              <ion-icon name="trash" onclick = "removeEmploy(${i})"></ion-icon>`
            tr.append(td1, td2, td3, td4, td5);
            table.append(tr);
        }

        // })

    }
}

// Deletet functionality  ===================

const removeEmploy = (e) => {
    let newArr = []
    getData.forEach((elm, i) => {
        if (i !== e) {
            newArr.push(elm);
        }
    })
    localStorage.setItem("UserData", JSON.stringify(newArr))
    window.location.href = "/dashboard.html"

}

// Pagination Js 
// ===========================================

let pageNum = document.getElementById("pageNum");
let createPage = () => {
    pageNum.innerHTML = null;
    let num = pageInput.value;
    let totalPage = Math.ceil(getData.length / num)
    console.log(totalPage)
    let x = 0;
    for (let i = 0; i < totalPage; i++) {
        let span = document.createElement("span");
        span.setAttribute("onClick", `showPage(${x})`)
        span.innerText = i + 1;
        pageNum.append(span);
        x += +(num)
    }
    mapData(num);
}

// Show Page =========================
const showPage = (n) => {

        table.innerHTML = null;
        table.innerHTML = ` <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>City</th>
        <th>Action</th>
        </tr>`

        var last = n+Number(pageInput.value)
        if(getData.length < last){
            last = getData.length
        }
        console.log(last)
        for (let i = n ; i <last; i++) {
            console.log("printing",n)
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            td1.innerHTML = getData[i].name;
            td2.innerHTML = getData[i].phone;
            td3.innerHTML = getData[i].email;
            td4.innerHTML = getData[i].city;
            td5.innerHTML = ` <ion-icon name="pencil" onclick="addEmploy(1,${i})"></ion-icon>
                          <ion-icon name="trash" onclick = "removeEmploy(${i})"></ion-icon>`
            tr.append(td1, td2, td3, td4, td5);
            table.append(tr);

        }
}



