document.addEventListener('DOMContentLoaded', () => {
  const createBtn = document.getElementById('createBtn');
  const destroyBtn = document.getElementById('destroyBtn');
  const boxCountInput = document.getElementById('boxCount');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const boxCount = parseInt(boxCountInput.value, 10);
    if (boxCount >= 1 && boxCount <= 100) {
      destroyBoxes(); 
      createBoxes(boxCount); 
    } else {
      alert('Lütfen 1 ile 100 arasında bir sayı girin!');
    }
    boxCountInput.value = ''; 
  });

  destroyBtn.addEventListener('click', destroyBoxes); 
});
