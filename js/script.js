const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Stop the link from triggering
    e.preventDefault();
    e.stopPropagation();
    
    const card = btn.closest('.card-info');
    card.classList.toggle('translate-y-[60%]');
    card.classList.toggle('translate-y-0');
    
    // Rotate arrow
    const arrow = btn.querySelector('svg');
    arrow.classList.toggle('rotate-180');
  });
});