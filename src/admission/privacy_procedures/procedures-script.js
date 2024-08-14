const procedureItems = document.querySelectorAll('.procedure-item');

procedureItems.forEach((item) => {
  item.addEventListener('click', () => {

    item.classList.toggle('active');
  });
});