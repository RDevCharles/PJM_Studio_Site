//Page Amimations

//nav bar toggles

const profileImg = document.getElementById('profile-img')

const arrowDown = document.getElementById('arrow-down')

const headerType = document.getElementById('title-h1')


let controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
    
    triggerElement: profileImg

})

//.addIndicators()

.setClassToggle('nav', 'nav-1')

.addTo(controller);



window.addEventListener('scroll', myFunction);

function myFunction() {
    arrowDown.style.display = 'none'
}






//show profile
let showProfileScene = new ScrollMagic.Scene ({
    triggerElement: headerType
})


//.addIndicators()

.setClassToggle('.main-content', 'main-content-show')

.addTo(controller);


//MiniMenuReveal

const miniMenu = document.getElementById("mini-menu")

const miniMenuBtn = document.getElementById("menu-button")

const mainWrapper = document.getElementById("main-wrapper")

//const bodyDOM = document.getElementsByTagName("BODY")[0];

function miniMenuReveal() {
   if (miniMenu.style.display === "none"){
    miniMenu.style.display = "block";
    document.body.style.overflow = "hidden";
    mainWrapper.style.overflow = "hidden";
    miniMenuBtn.style.color = "rgba(116, 0, 170, 0.774)";
    
   }
   else {miniMenu.style.display = "none";
        document.body.style.overflow = "scroll";
        mainWrapper.style.overflow = "scroll";
        miniMenuBtn.style.display = "block";
        miniMenuBtn.style.color = "white";
      
        


}
}

///////Menu reveal for other sites
const otherSites = document.getElementById("other-sites-menu")

function otherSiteMenu() {
    if(otherSites.style.visibility === 'hidden') {
        otherSites.style.visibility = 'visible';
        
    }

    else  {
        otherSites.style.visibility = 'hidden';
    }
}

let edP1Text = document.getElementById('inside-info-text-ed-p1');

let edP2Text = document.getElementById('inside-info-text-ed-p2');

let edP3Text = document.getElementById('inside-info-text-ed-p3');

function showInsideText() {
   {
    setTimeout(function(){edP1Text.style.display = "block";

}, 500) } 


}

function hideInsideText() {
    {
     setTimeout(function(){edP1Text.style.display = "none";
 
 }, 500) } 
 
 
 }

 function showInsideTextP2() {
    {
     setTimeout(function(){edP2Text.style.display = "block";
 
 }, 500) } 
 
 
 }
 
 function hideInsideTextP2() {
     {
      setTimeout(function(){edP2Text.style.display = "none";
  
  }, 500) } 
  
  
  }

  function showInsideTextP3() {
    {
     setTimeout(function(){edP3Text.style.display = "block";
 
 }, 500) } 
 
 
 }
 
 function hideInsideTextP3() {
     {
      setTimeout(function(){edP3Text.style.display = "none";
  
  }, 500) } 
  
  
  }

