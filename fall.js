function addLeaf() {
    const input = document.getElementById('leafInput');
    if (!input.value) return;
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.textContent = "🍁 " + input.value;
    leaf.style.left = Math.random() * 80 + '%';
    document.getElementById('tree').appendChild(leaf);
    input.value = '';
    setTimeout(() => leaf.remove(), 5000);
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