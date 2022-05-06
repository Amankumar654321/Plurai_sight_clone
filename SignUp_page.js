document.querySelector("#img1box1").addEventListener("click", myImgFun);
function myImgFun(){
    window.location.href="landingPage.html";
    var name = document.querySelector("#reflect").innerText;
    if(name === "Amankumar@gmail.com"){
        document.querySelector("#reflect").style.display = "flex";
    }




}
document.querySelector(".form").addEventListener("click", myplatforfun);
function myplatforfun(){
    window.location.href = "platform.html";
    
}
document.querySelector(".pro").addEventListener("click", myProFun);
function myProFun(){
    window.location.href = "product.html";
}
document.querySelector(".res").addEventListener("click", myResFun);
function myResFun(){
    window.location.href = "resources.html";
}
document.querySelector(".ind").addEventListener("click", myIndFun);
function myIndFun(){
    window.location.href = "ForIndividual.html";
}

document.querySelector("#Ibox2_1").addEventListener("click", myTryforfreeFun);
function myTryforfreeFun(){
    window.location.href = "tryforfree.html";
}
document.querySelector("#search").addEventListener("click", mySearchFun);
function mySearchFun(){
    document.querySelector("#learn").style.display = "flex";
    document.querySelector("#cross").style.display = "flex";
}
document.querySelector("#cross").addEventListener("click", myCrossFun);
function myCrossFun(){
    document.querySelector("#cross").style.display = "none";
    document.querySelector("#learn").style.display = "none";
}
document.querySelector("#phone").addEventListener("click", myPhoneFun);
function myPhoneFun(){
    window.location.href = "contactPage.html";
}
document.querySelector("#signup").addEventListener("click", mySignupFun);
function mySignupFun(){
    window.location.href = "Signup_page.html";
}
document.querySelector("form").addEventListener("submit", myFormFun);
function myFormFun(){
    event.preventDefault();
    var arrOfPerson = JSON.parse(localStorage.getItem("userdetails"))||[];
var person = document.querySelector("#email").value;
var password = +document.querySelector("#password").value;
var idObj = {
    email: person,
    pass : password
};

if(person === "Amankumar@gmail.com" && password === 123456789){
    document.querySelector("#reflect").style.display = "flex";
    alert("Login successful");

}
else{
    alert("Invalid password");
    
}
arrOfPerson.push(idObj);
localStorage.setItem("userdetails", JSON.stringify(arrOfPerson));
var show = JSON.parse(localStorage.getItem("userdetails"));


}