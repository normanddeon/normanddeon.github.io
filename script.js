const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
const mobileMenulinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuIcon.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open');

});

mobileMenuCloseBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open');

});

mobileMenulinks.forEach((link)=>{
    link.addEventListener("click",()=>{
    mobileMenu.classList.toggle('open');
    });
});

var mainHeaderLinks=document.querySelectorAll('.main-header-link');
var mobileHeaderLinks=document.querySelectorAll('.mobile-menu-link');


mainHeaderLinks.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        var linkHash=event.target.hash;

        if(linkHash !== undefined){
            event.preventDefault();
            var linkSection=document.querySelector(linkHash);
            var linkSectionTop=linkSection.getBoundingClientRect().top;
            window.scrollBy({
                top:linkSectionTop,
                behavior:'smooth'
            });
        }

    });
});


mobileHeaderLinks.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        var linkHash=event.target.hash;
        if(linkHash !== undefined){
            event.preventDefault();
            var linkSection=document.querySelector(linkHash);
            var linkSectionTop=linkSection.getBoundingClientRect().top;
            window.scrollBy({
                top:linkSectionTop,
                behavior:'smooth'
            });
        }

    });
});


(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
 
function labnolThumb(id) {
    return '<img class="youtube-thumb" src="i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}
 
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}
