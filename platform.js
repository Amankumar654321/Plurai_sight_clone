document.querySelector("#img1box1").addEventListener("click", myImgFun);
function myImgFun(){
    window.location.href="landingPage.html";
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
    window.location.href = "SignUp_page.html";
}