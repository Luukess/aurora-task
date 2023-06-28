function handleSearchMobileBox() {
    const mobileSearchBoxContainer = document.getElementById('search-box-mobile');
    if (mobileSearchBoxContainer.style.display === '' || mobileSearchBoxContainer.style.display === 'none') {
        mobileSearchBoxContainer.style.display = 'block';
    } else if (mobileSearchBoxContainer.style.display !== '' || mobileSearchBoxContainer.style.display !== 'none') {
        mobileSearchBoxContainer.style.display = 'none';
    };
};