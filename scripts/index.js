let editForm = document.querySelector('.edit-form');
let closeButton = editForm.querySelector('.edit-form__close');
let nameInput = editForm.querySelector('.edit-form__item-form_title-input');
let aboutInput = editForm.querySelector('.edit-form__item-form_subtitle-input');
let profile = document.querySelector('.profile')
let editButton = profile.querySelector('.profile__edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubTitle = profile.querySelector('.profile__subtitle');

function togglePopup() {
    editForm.classList.toggle('edit-form_opened');
    if (editForm.classList.contains('edit-form_opened')) {
        nameInput.value = profileTitle.textContent;
        aboutInput.value = profileSubTitle.textContent;
    }
}

function formSubmit (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubTitle.textContent = aboutInput.value;
    togglePopup();    
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
editForm.addEventListener('submit', formSubmit);