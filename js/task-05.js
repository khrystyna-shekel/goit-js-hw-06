const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input',(event) => {
    const value =  event.currentTarget.value;
    outputText.textContent = value ? `${value}` : "Anonymous";
});


