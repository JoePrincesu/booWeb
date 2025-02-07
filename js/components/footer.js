function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer class="footer">
            <div>
                ${config.footer.copyrigh}
                <br>
                Theme: <a href="${config.footer.theme.href}">${config.footer.theme.text}</a>
                <br>
                <a href="${config.footer.icp.href}" target="_blank">${config.footer.icp.text}</a>
                <br>
                ${config.footer.attention}
            </div
        </footer>
    `;
}