window.onload = function () {
    const mobileNavBackground = document.getElementById('mobile-nav-background');
    const sidebarContainer = document.getElementById('sidebar-container');
    const sidebar = document.getElementById('sidebar');

    document.onclick = function (e) {
        if (e.target.className === 'icon-menu hamburger-icon-menu') {
            mobileNavBackground.style.width = '100%';
            sidebarContainer.style.width = '80%';
            sidebar.style.opacity = '1';
            sidebar.style.transition = 'opacity 2s';
        } else if (e.target.id === 'mobile-nav-background' || e.target.className === 'icon-cancel close-icon') {
            mobileNavBackground.style.width = '0%';
            sidebarContainer.style.width = '0%';
            sidebar.style.opacity = '0';
            sidebar.style.transition = 'opacity 0.2s';
        }
    };
};