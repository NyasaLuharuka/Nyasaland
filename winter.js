const imageSelect = document.getElementById('imageSelect');
const backgroundDiv = document.getElementById('backgroundDiv');

// Handle dropdown selection
imageSelect.addEventListener('change', function() {
  const selectedImage = this.value;
  backgroundDiv.style.backgroundImage = 'url(' + selectedImage + ')';
});


// FLOAT A CLOUD
document.getElementById('floatBtn').addEventListener('click', () => {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = Math.random() * 70 + 110 + 'vh'; // random vertical position
    document.body.appendChild(cloud);

    setTimeout(() => {
      cloud.remove(); // remove after animation ends
    }, 20000);
  });

  // BOOKSHELF DRAWER TOGGLE
  const bookshelf = document.getElementById('bookshelf');
  const drawer = document.getElementById('drawer');
  bookshelf.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // SAVE NOTE
  const noteInput = document.getElementById('noteInput');
  const saveBtn = document.getElementById('saveNote');

  // Load saved note if it exists
  window.addEventListener('load', () => {
    const saved = localStorage.getItem('cozyNote');
    if (saved) noteInput.value = saved;
  });

  saveBtn.addEventListener('click', () => {
    const note = noteInput.value;
    localStorage.setItem('cozyNote', note);
    alert("Saved to your cozy shelf 💭");
  });