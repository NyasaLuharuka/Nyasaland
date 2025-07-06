function addLeaf() {
    const text = document.getElementById("leafInput").ariaValueMax;
    const leaf = document.createElement('div')
    leaf.className = 'leaf';
    leaf.textContent = text;
    leaf.style.left = Math.random() * 90 + "%";
    document.getElementById("tree").appendChild(leaf);
    setTimeout(() => leaf.remove(), 5000);
    console.log("success");
}