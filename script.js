console.log("ciao")

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
