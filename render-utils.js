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

    const p = document.createElement('p');
    p.classList.add('participant');
    p.textContent = participant.name;

    div.append(p);
    return div;
}