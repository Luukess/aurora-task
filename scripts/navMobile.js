const mobileNavWrapper = document.getElementById('mobile-nav-wrapper');
const mobileNavBackground = document.getElementById('mobile-nav-background');
const sidebarContainer = document.getElementById('sidebar-container');
const sidebar = document.getElementById('sidebar');
const searchInputDesktop = document.getElementById('search-input-desktop');
const searchLabelInputDesktop = document.getElementById('label-search-input-desktop');

window.onload = function () {

    document.onclick = function (e) {
        if (e.target.className === 'icon-menu hamburger-icon-menu') {
            setTimeout(() => {
                mobileNavBackground.style.width = '100%';
                sidebarContainer.style.width = '80%';
                sidebar.style.opacity = '1';
                sidebar.style.transition = 'opacity 2s';
            }, 100);
            mobileNavWrapper.style.display = 'block';
        } else if (e.target.id === 'mobile-nav-background' || e.target.className === 'icon-cancel close-icon') {
            mobileNavBackground.style.width = '0%';
            sidebarContainer.style.width = '0%';
            sidebar.style.opacity = '0';
            sidebar.style.transition = 'opacity 0.2s';
            setTimeout(() => {
                mobileNavWrapper.style.display = 'none';
            }, 300);
        }

        if (searchInputDesktop === document.activeElement) {
            searchLabelInputDesktop.style.borderBottom = '1px solid #ecc7d0';
        } else {
            searchLabelInputDesktop.style.borderBottom = '1px solid #d7d7d7';
        }
    };
};

function resetMenu() {
    if (window.innerWidth >= 991.98) {
        mobileNavWrapper.style.display = 'none';
        mobileNavBackground.style.width = '0%';
        sidebarContainer.style.width = '0%';
        sidebar.style.opacity = '0';
        sidebar.style.transition = 'opacity 0.2s';
    };
};

window.addEventListener('resize', resetMenu);