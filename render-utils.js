export function renderWorkshop(workshop) {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('workshop');

    const h3 = document.createElement('h3');
    h3.textContent = workshop.name;

    containerDiv.append(h3);
    return containerDiv;
}


export function renderParticipant(participant) {
    const div = document.createElement('div');
    div.classList.add('participants');

    const pName = document.createElement('p');
    pName.classList.add('participant');
    pName.textContent = participant.name;

    const pContact = document.createElement('p');
    pContact.classList.add('participant-contact');
    pContact.textContent = participant.contact;

    div.append(pName, pContact);
    return div;
}