console.log("ciao")

var navStatus = false;
var mobileMenu = false;
var scroll = false;
var intro = false;
var pjanoo = new Audio("sounds/pjanoo.mp3");

window.onscroll = () =>
{
    var rect = document.getElementById("games-page").getBoundingClientRect();
    if (window.innerWidth > 463)
    {
        var bottom = rect.bottom - 350 < window.innerHeight;
    }
    else
    {
        var bottom = rect.bottom - 750 < window.innerHeight;
    }

    if (bottom)
    {
        document.getElementById("fade-in").style.transform = "translateY(20px)";
        document.getElementById("fade-in").style.opacity = 1;
    }
    else
    {
        document.getElementById("fade-in").style.transform = "translateY(-20px)";
        document.getElementById("fade-in").style.opacity = 0;
    }

    if (!scroll)
    {
        scroll = !scroll;
        document.getElementById("avviso").style.transform = "translateY(0px)";
    }
}

function CurtainMenu()
{
    document.getElementById("curtain-menu").style.height = !navStatus ? "160px" : "0%";
    document.getElementById("curtain-menu").style.opacity = !navStatus ? "100%" : "0%";

    document.getElementById("log-in").style.borderRadius = !navStatus ? "0px" : "15px";
    
    navStatus = !navStatus;
}

function MobileMenuButton()
{
    document.getElementById("mobile-menu-button").style.transform = !mobileMenu ? "rotate(90deg)" : "rotate(0deg)";
    
    document.getElementById("mobile-menu-content").style.opacity = !mobileMenu ? "100%" : "0%";
    document.getElementById("mobile-menu").style.height = !mobileMenu ? "100%" : "0%";
    document.getElementById("mobile-menu-content").style.pointerEvents = !mobileMenu ? "all" : "none";

    mobileMenu = !mobileMenu;
}

function RimuoviAvviso()
{
    document.getElementById("avviso").style.transform = "translateY(-600px)";
}

setInterval(() => {
    if (window.innerWidth <= 200)
    {
        if (!intro)
        {
            pjanoo.play();
            intro = !intro;
        }
        
        if (Math.floor(Math.random() * 2) == 0)
            new Audio("sounds/mhanz1.mp3").play();
        else
            new Audio("sounds/mhanz2.mp3").play();
    }
    else
    {
        if (intro)
        {
            pjanoo.pause();
            intro = !intro;
        }
    }
}, 1024);