const glow = document.getElementById('glow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

const links = document.getElementById('links');
document.getElementById('menuBtn').onclick = () => links.classList.toggle('open');
links.querySelectorAll('a').forEach(a => a.onclick = () => links.classList.remove('open'));

document.querySelectorAll('.swatch').forEach(s => s.onclick = () => {
    document.querySelector('.swatch.active').classList.remove('active');
    s.classList.add('active');
    document.documentElement.style.setProperty('--shade', s.dataset.c);
});
document.querySelectorAll('#filters button').forEach(b => b.onclick = () => {
    document.querySelector('#filters .active').classList.remove('active');
    b.classList.add('active');
    document.querySelectorAll('.card').forEach(c => {
        c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f);
    });
});

let count = 0;
const toast = document.getElementById('toast');
document.querySelectorAll('.add').forEach(b => b.onclick = () => {
    document.getElementById('count').textContent = ++count;
    toast.textContent = b.closest('.card').querySelector('h3').textContent + ' added to cart';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
});

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = document.getElementById('text').value.trim();
    const msg = document.getElementById('msg');
    if (!name || !text) { msg.textContent = 'Please enter your name and message.'; return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { msg.textContent = 'Please enter a valid email address.'; return; }
    msg.textContent = 'Thank you, ' + name + '! We will reply soon.';
    e.target.reset();
});