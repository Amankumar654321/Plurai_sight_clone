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
document.querySelector("#business").addEventListener("click", mytermFum);
 
function mytermFum(){
    window.location.href = "termCondition.html";
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
document.querySelector(".butn1").addEventListener("click", myIndividualFun);
function myIndividualFun(){
    window.location.href = "tryforfree.html";
}
document.querySelector(".butn3").addEventListener("click", myTeamFun);
function myTeamFun(){
    window.location.href = "tryforfreeForTeam.html";
}
document.querySelector("#face").addEventListener("click", myFacebookFun);
function myFacebookFun(){
window.location.href = "https://www.facebook.com/pluralsight"

}
document.querySelector("#twitt").addEventListener("click", mytwitterFun);
function mytwitterFun(){
window.location.href = "https://twitter.com/pluralsight"

}
document.querySelector("#insta").addEventListener("click", myinstaFun);
function myinstaFun(){
window.location.href = "https://www.instagram.com/pluralsight/"

}
document.querySelector("#linki").addEventListener("click", mylinkinedFun);
function mylinkinedFun(){
window.location.href = "https://www.linkedin.com/company/pluralsight/"

}
document.querySelector("#youtube").addEventListener("click", myyoutubeFun);
function myyoutubeFun(){
window.location.href = "https://www.youtube.com/pluralsight"

}