import { checkAuth, fetchWorkshops, createParticipant, logout } from '../fetch-utils.js';

const form = document.getElementById('participant-form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // get name, contact and workshop from form
    const formInfo = new FormData(form);

    // use createParticipant to create participant with name, contact and workshop id
    const formData = {
        name: formInfo.get('participant-name'),
        contact: formInfo.get('contact-info'),
        workshop_id: formInfo.get('workshop-id'),
    };
    await createParticipant(formData);
    form.reset();

    location.replace('../workshops-page');
});