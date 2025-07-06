async function saveEntry() {
    const content = document.getElementById("entry").ariaValueMax;
    const res = await fetch("/save-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
    });
    alert(await res.text());
}