var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);

if ( isIE ) {
  document.querySelector("html").style.display = "none";
}
// Scroll Event
var header = document.querySelector(".header");
var headerFixed = document.querySelector(".header-container-fixed");
var headerUnFixed = document.querySelector(".header-container-unfixed");
var scrollButton = document.querySelector(".scroll-top-button");
var prevScrollPosition = window.pageYOffset;
if(prevScrollPosition > 200){
    headerUnFixed.style.transition = "none";
}
scrollButton.addEventListener("click", scrollTopFunction);
window.onscroll = function(){
    //Scroll Button Event
    var currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition < currentScrollPosition) {
        if(currentScrollPosition > 500){
            scrollButton.style.display = "block";
        }
    }
    else{
        if (currentScrollPosition < 500){
            scrollButton.style.display = "none";
        }
    }
    prevScrollPosition = currentScrollPosition;
    //End Scroll Button Event
    //Header Scroll Event
    var headerOffset = header.offsetTop;
    if (window.pageYOffset > headerOffset) {
        header.classList.add("header-sticky");
    }
    else {
        header.classList.remove("header-sticky");
    }
}
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Scroll Event

//Slow appear Event
var headerContent = document.querySelectorAll(".content-heading__foreground .slow-appear");
var time;
var i = 0;
function slowShowHero() {
    if (headerContent[i].length > 1){
        time = 50;
    }else{
        time = 300;
    }
    setTimeout(function() {
        headerContent[i].style.display = "flex";
        headerContent[i].style.opacity = "1"; 
        i++;
        if (i < headerContent.length){
          slowShowHero();
        }
  }, time)
}
slowShowHero();


var chatFormContent = document.querySelectorAll(".chat-form-animation");
var chatForm = document.querySelector(".header-chat-form");
var chatInput = document.getElementById("close-checkbox");
chatInput.addEventListener("change", chatFunc)
var j = 0;
function chatFunc() {
    if(chatInput.checked){
        setTimeout(function() {
            chatForm.style.left = "0";
            chatFormContent[j].style.transform = "translate(0, 0%)"; 
            chatFormContent[j].style.transition = "translate, opacity linear 0.5s";
            chatFormContent[j].style.animation = "slowSmoothShow linear 0.5s";
            chatFormContent[j].style.opacity = "1";

            j++;
            if (j < chatFormContent.length){
                chatFunc();
            }
      }, 300)
    }else{
        var v = j - 1;
        setTimeout(function() {
            chatFormContent[v].style.transform = "translate(0, 1.5rem)"; 
            chatFormContent[v].style.transition = "translate, opacity linear 0.5s";
            chatFormContent[v].style.animation = "slowSmoothShowReverse linear 0.5s";
            chatFormContent[v].style.opacity = "0";
            j--;
            if (j > 0){
                chatFunc();
            }else{
                chatForm.style.left = "-100%";
            }
      }, 300)
    }
}

// End slow appear Event