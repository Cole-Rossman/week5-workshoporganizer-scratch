import { checkAuth, fetchWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop, renderParticipant } from '../render-utils.js';

const workshopList = document.getElementById('workshop-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});