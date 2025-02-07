function initContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <main class="main-content">
            ${config.content.banner.show ? `
                <a href="${config.content.banner.link}" class="banner" target="_blank">
                    ${config.content.banner.text}
                    <span class="banner-action">
                        ${config.content.banner.actionText}
                        <i class="${config.content.banner.icon}"></i>
                    </span>
                </a>
            ` : ''}
            <h1 class="gradient-text">${config.content.gradient}</h1>
            <p class="description">${config.content.description}</p>
            <a href="${config.content.learn.href}" class="learn-more">
                ${config.content.learn.text}
                <i class="${config.content.learn.icon}"></i>
            </a>
        </main>
    `;
}