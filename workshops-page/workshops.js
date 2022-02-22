import { checkAuth, fetchWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop, renderParticipant } from '../render-utils.js';

const workshopList = document.getElementById('workshop-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});

async function displayWorkshops() {
    // fetch all workshops from supabase
    const workshops = await fetchWorkshops();
    // clear out workshopList
    workshopList.textContent = '';
    // loop and append for workshops
    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);

        for (let participant of workshop.participants) {
            const participantEl = renderParticipant(participant);

            workshopEl.append(participantEl);
        }
        workshopList.append(workshopEl);
    }
}
displayWorkshops();

window.addEventListener('load', async () => {
    const workshops = await fetchWorkshops();

    displayWorkshops(workshops);
});