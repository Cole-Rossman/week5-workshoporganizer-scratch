import { checkAuth, fetchWorkshops, createParticipant, logout } from '../fetch-utils.js';

const form = document.getElementById('participant-form');
const logoutButton = document.getElementById('logout');

checkAuth();

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

window.addEventListener('load', async () => {
    // grab the select html element from the DOM
    const selectEl = document.getElementById('workshop-id');
    // get the workshops from supabase
    const workshops = await fetchWorkshops();
    // for each workshop
    // create an option tag
    // set the option's value and text content
    // and append the option to the select
    for (let workshop of workshops) {
        const option = document.createElement('option');

        option.value = workshop.id;
        option.label = workshop.name;

        selectEl.append(option);
    }
});