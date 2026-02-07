const search = document.getElementById('search');
const cards = document.querySelectorAll('.card');

search.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  cards.forEach(card => {
    const name = card.dataset.name;
    const game = card.dataset.game;
    
    if (name.includes(query) || game.includes(query)) {
      card.style.visibility = 'visible';
      card.style.opacity = '1';    
    } 
    else {
      card.style.visibility = 'hidden';
      card.style.opacity = '0';   
     }
  });
});