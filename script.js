AOS.init();

//navbar//

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.navList.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);
  this.animateLinks();
}




animateLinks() {
this.navLinks.forEach((link, index) => {
link.style.animation
? (link.style.animation = "")
: (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`);
});
}




  addClickEvent(){
      this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
      if (this.mobileMenu) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobileMenu",
  ".containerNav2",
  ".containerNav2 a",
);
mobileNavbar.init(); 
//navbar end//
//HOVER ART EFFECT//

VanillaTilt.init(document.querySelectorAll(".mainArt"), {
    max: 25,
    speed: 400,
    glare: true,
});

//end hover art//







//animation begin typing//

const type = (element) => {
  const text = "Inicio"
  text.split("")
  .forEach((letter, index) => {
    setTimeout(() => element.innerHTML += letter, 100* index)
  })
};


addEventListener("load", type(document.querySelector("#begin")));

// end animation begin typing //








//SCROLL//

$(document).ready(function(){

    

    $("a").on('click', function(event) {
  
      
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;
  
        
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          
          window.location.hash = hash;
        });
      } 
    });
  });


  //fim scroll//











  //skills begin//
  var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});
  //skills end//



  //copy contact begin//
  function copyTextF() {

    var copyText = document.getElementById("EmailCopy");
    var showTxt = document.querySelector(".media2")
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    showTxt.classList.add("active");


  }
  //copy contact end//


