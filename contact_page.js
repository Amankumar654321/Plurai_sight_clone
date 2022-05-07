document.querySelector("#img1box1").addEventListener("click", myImgFun);
function myImgFun(){
    window.location.href="index.html";
}
document.querySelector("#business").addEventListener("click", mytermFum);
 
function mytermFum(){
    window.location.href = "termCondition.html";
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
document.querySelector("#butnskill").addEventListener("click", mySkillFun);
function mySkillFun(){
document.querySelector("#intrest").value = "Pluralsight aurthor oppourtunity";
document.querySelector("#intrest").style.backgroundColor = "black";
document.querySelector("#intrest").style.color = "white";
document.querySelector("#message").value = "I want to learn this skill";
document.querySelector("#message").style.backgroundColor = "black";
document.querySelector("#message").style.color = "white";

}
document.querySelector("#butnflow").addEventListener("click", myFlowFun);
function myFlowFun(){
document.querySelector("#intrest").value = "Pluralsight product for business";
document.querySelector("#intrest").style.backgroundColor = "black";
document.querySelector("#intrest").style.color = "white";
document.querySelector("#message").value = "I want to learn this flow of knowledge";
document.querySelector("#message").style.backgroundColor = "black";
document.querySelector("#message").style.color = "white";
}

document.querySelector("#form").addEventListener("submit", myContactFun);

function myContactFun(){
    event.preventDefault();
var Firstname = document.querySelector("#name").value;
var Lastname = document.querySelector("#lastname").value;
var Email = document.querySelector("#email").value;
var Company = document.querySelector("#company").value;
var Country = document.querySelector("#country").value;
var phone = document.querySelector("#phone").value;
var intrest = document.querySelector("#intrest").value;
var message = document.querySelector("#message").value;
var arrContact =JSON.parse(localStorage.getItem("contactdata")) || [];

var contactObj = {
name:Firstname,
last : Lastname,
email : Email,
company: Company,
country : Country,
Phone: phone,
Intrest : intrest,
Mess:message

};
arrContact.push(contactObj);
console.log(arrContact);
var contactInfo = localStorage.setItem("contactdata", JSON.stringify(arrContact));

console.log(contactInfo);

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