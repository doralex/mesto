let editForm = document.querySelector('.edit-form');
let closeButton = editForm.querySelector('.edit-form__close');
let nameInput = editForm.querySelector('[name="title"]');
let aboutInput = editForm.querySelector('[name="subtitle"]');
let profile = document.querySelector('.profile')
let editButton = profile.querySelector('.profile__edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubTitle = profile.querySelector('.profile__subtitle');

function popup() {
    editForm.classList.toggle('edit-form_opened');
    if (editForm.classList.contains('edit-form_opened')) {
        nameInput.setAttribute("value", profileTitle.textContent);
        aboutInput.setAttribute("value", profileSubTitle.textContent);
    }
}

function formSubmit (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubTitle.textContent = aboutInput.value;
    popup();    
}

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);
editForm.addEventListener('submit', formSubmit);