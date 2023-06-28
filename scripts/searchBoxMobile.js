function handleSearchMobileBox() {
    const mobileSearchBoxContainer = document.getElementById('search-box-mobile');
    if (mobileSearchBoxContainer.style.display === '' || mobileSearchBoxContainer.style.display === 'none') {
        mobileSearchBoxContainer.style.display = 'block';
    } else if (mobileSearchBoxContainer.style.display !== '' || mobileSearchBoxContainer.style.display !== 'none') {
        mobileSearchBoxContainer.style.display = 'none';
    };
};

function resetSearchBox() {
    const mobileSearchBoxContainer = document.getElementById('search-box-mobile');
    if (window.innerWidth >= 1199.98) {
        mobileSearchBoxContainer.style.display = 'none';
    };
};

window.addEventListener('resize', resetSearchBox);