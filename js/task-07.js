const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontSizeControl.addEventListener('input', (e) => {
    const fontSize = fontSizeControl.value + 'px';
    spanText.style.fontSize = fontSize;
})