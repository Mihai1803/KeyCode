const button = document.querySelector('.btn');
const Text = document.querySelectorAll('p');

const onInput = (e) => {
    const input = e.target.value;
    if (Array.from(input).length > 1) {
        alert('You have to many chars');
        location.reload();
    }
    console.log(e.key);
    Text.forEach((element, index) => {
        if (index === 0) {
            element.innerText = `${e.key}`;
        } else if (index === 1) {
            element.innerText = `${e.keyCode}`;
        } else if (index === 2) {
            element.innerText = `${e.code}`;
        }
    });
};

button.addEventListener('keydown', onInput);