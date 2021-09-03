const card = document.querySelectorAll(".card__inner");

flip=(idx)=>{
    card[idx].classList.toggle('is-flipped');
    card[idx].addEventListener('mouseleave',()=>{
      if(card[idx].classList.contains('is-flipped')){
        card[idx].classList.toggle('is-flipped');
      }
    })

}