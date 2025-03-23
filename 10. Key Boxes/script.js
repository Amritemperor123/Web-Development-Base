const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
    ${e.key === '' ? 'Space' : event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>
    <div class="key">
    ${event.code}
    <small>event.code</small>
</div>
    `
})