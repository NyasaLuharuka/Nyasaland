function addLeaf() {
  const input = document.getElementById('leafInput');
  if (!input.value) return;
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.textContent = "🍁 " + input.value;
  leaf.style.left = Math.random() * 80 + '%';
  document.getElementById('tree').appendChild(leaf);
  input.value = '';
  
  // Keep leaves permanently (remove the delete timeout)
  leaf.style.animation = 'fall 5s linear forwards';
  leaf.addEventListener('animationend', () => {
      leaf.style.top = (Math.floor(Math.random() * (90 - 20 + 1)) + 20).toString()+'%';
      leaf.style.opacity = '1';
      leaf.style.transform = 'rotate(360deg)';
      leaf.style.animation = 'none'; // stop animation and freeze it in final position
  });
}

  function releaseLantern() {
    const input = document.getElementById('lanternInput');
    if (!input.value) return;
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    lantern.textContent = input.value;
    lantern.style.left = Math.random() * 90 + '%';
    document.getElementById('lantern').appendChild(lantern);
    input.value = '';
    setTimeout(() => lantern.remove(), 7000);
  }