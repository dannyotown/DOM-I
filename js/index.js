const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
function createNavBar(){
    let navBar = document.querySelectorAll('a');
    let arrayNav = Array.from(navBar);
    for(i=0; i<arrayNav.length; i++){
    navBar[i].append(siteContent.nav["nav-item-"+(i+1)+""]);
  }
}

createNavBar();

function setButton(){
  let button = document.querySelector('.cta-text').children;
  button[0].append(siteContent.cta.h1);
  button[1].append(siteContent.cta.button);
}
setButton();

function setImage(){
  let image = document.getElementById("cta-img");
  image.setAttribute("src",siteContent.cta["img-src"])
}
setImage();

function toptext(){
  let textContent = document.querySelector(".top-content").children;
  let textLeft = textContent[0].children;
  textLeft[0].append(siteContent["main-content"]["features-h4"])
  textLeft[1].append(siteContent["main-content"]["features-content"])
  let textRight = textContent[1].children;
  textRight[0].append(siteContent["main-content"]["about-h4"])
  textRight[1].append(siteContent["main-content"]["about-content"])
}
toptext();
function setImageMiddle(){
  let image = document.getElementById("middle-img");
  image.setAttribute("src",siteContent["main-content"]["middle-img-src"])
}
setImageMiddle();
function bottomtext(){
  let textContent = document.querySelector(".bottom-content").children;
  let textLeft = textContent[0].children;
  textLeft[0].append(siteContent["main-content"]["services-h4"])
  textLeft[1].append(siteContent["main-content"]["services-content"])
  let textMiddle = textContent[1].children;
  textMiddle[0].append(siteContent["main-content"]["product-h4"])
  textMiddle[1].append(siteContent["main-content"]["product-content"])
  let textRight = textContent[2].children;
  textRight[0].append(siteContent["main-content"]["vision-h4"])
  textRight[1].append(siteContent["main-content"]["vision-content"])
}
bottomtext();

function contact(){
  let textContent = document.querySelector(".contact").children;
  textContent[0].append(siteContent["contact"]["contact-h4"])
  textContent[1].append(siteContent["contact"]["address"])
  textContent[2].append(siteContent["contact"]["phone"])
  textContent[3].append(siteContent["contact"]["email"])
}
contact();

function footer(){
    let textContent = document.querySelector("footer").children;
    textContent[0].append(siteContent["footer"]["copyright"])
}
footer();