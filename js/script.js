
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popupSaveButton = document.querySelector('.popup__button');
// Находим форму в DOM
let formElement = document.querySelector('.popup__input-container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_name');
let jobInput = document.querySelector('.popup__item_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job'); 

let popupToggle = function() {
    if (!popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    } else {
        popup.classList.remove('popup_opened');
    }
}

function safeDescriptionHandler(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', safeDescriptionHandler);
