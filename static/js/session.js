const ullistrationContainer = document.getElementById('ullistration');
const ullistrationInput = document.getElementById('img');

const ullistration = document.createElement('div');

if (ullistrationInput) {
    ullistrationInput.addEventListener('change', () => {
        ullistration.style.backgroundImage = 'url(' + URL.createObjectURL(ullistrationInput.files[0]) + ')';
        ullistration.style.height = '100%';
        ullistration.classList.add('card-back-image');
        ullistration.classList.add('profile-image-ullistration');

        ullistrationContainer.innerHTML = "";
        ullistrationContainer.appendChild(ullistration);
    })
}