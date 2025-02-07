function initNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <header class="header">
            <div class="profile">
                <img src="${config.site.icon}" alt="icon">
                <span>${config.site.title}</span>
            </div>
            <div class="buttons">
                <a href="${config.navbar.secondary.href}" class="btn btn-secondary">${config.navbar.secondary.text}</a>
                <a href="${config.navbar.primary.href}" class="btn btn-primary" target="_blank">${config.navbar.primary.text}</a>
            </div>
        </header>
    `;
}