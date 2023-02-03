window.addEventListener("scroll", reveal);

function reveal(){
    let cards = document.querySelectorAll(".reveal")
    console.log(cards)
    cards.forEach((card) => {

        let windowHeight = window.innerHeight;
        let revealTop = card.getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            card.classList.add('active');
        }
        else{
            card.classList.remove('active');
        }
    
    });
};


reveal();