const Personal = document.getElementById("personalInfo")
const education = document.getElementById("educationalInfo")
const health = document.getElementById("healthInfo")


function next() {
   
    Personal.style.display = "none";
    education.style.display = "flex";  
    check() 
   
}

function back() {
    education.style.display = "none";
    Personal.style.display = "flex";
}

function nextt() {
    Personal.style.display = "none";
    education.style.display= "none";
    health.style.display = "flex";
    checkval()
}

function back() {
   education.style.display = "none";
   Personal.style.display = "flex";
}

function backk() {
    Personal.style.display = "none";
    education.style.display= "flex";
   health.style.display = "none";
}
function get() {
    Personal.style.display = "flex";
    education.style.display= "none";
    health.style.display = "none";
}


function check(){
    if(Personal.innerHTML.valueOf("focus" == "")) {
        alert("Please Input Your Details")
         
    }
    else{
        Personal.style.display = "none";
        education.style.display = "flex";   
    }
}

function checkval(){
    if(education.innerHTML.valueOf("focus" == "")) {
        alert("Please Input Your Details")
        // Personal.style.display = "none";
        // education.style.display= "flex";
        // health.style.display = "none"
    }
    else{
        Personal.style.display = "none";
        education.style.display= "none";
        health.style.display = "flex"
    }

}



// function check(){
//     if(Personal.innerHTML.valueOf("focus" == "")) {
//         return false
         
//     }
//     else{
//         Personal.style.display = "none";
//         education.style.display = "flex";   
//     }
// }

// function checkval(){
//     if(education.innerHTML.valueOf("focus" == "")) {
//         alert("Please Input Your Details")
//         // Personal.style.display = "none";
//         // education.style.display= "flex";
//         // health.style.display = "none"
//     }
//     else{
//         Personal.style.display = "none";
//         education.style.display= "none";
//         health.style.display = "flex"
//     }

// }