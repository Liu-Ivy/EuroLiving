document.addEventListener('DOMContentLoaded', () => {
    // 1. 自動載入 Section 內容
    const aboutPlaceholder = document.getElementById('about-placeholder');
    if (aboutPlaceholder) {
        fetch('sections/about.html')
            .then(response => response.text())
            .then(data => {
                aboutPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('無法讀取關於我們內容:', error));
    }

    // 2. 漢堡選單控制
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const myNav = document.getElementById('myNav');
    const navLinks = document.querySelectorAll('.nav-overlay a');

    if(hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => myNav.classList.add('active'));
    }
    if(closeBtn) {
        closeBtn.addEventListener('click', () => myNav.classList.remove('active'));
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => myNav.classList.remove('active'));
    });
});
