function handleDisplayBasket() {
    const basket = document.getElementById('basket');

    if (basket.style.display === '' || basket.style.display === 'none') {
        basket.style.display = 'block';
    } else {
        basket.style.display = 'none';
    };
};