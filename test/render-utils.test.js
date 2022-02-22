import { renderWorkshop, renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('renderWorkshop should render a div with a class of workshop and an h3 with the workshop name', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h3>Advanced spearfishing workshop</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({ name: 'Advanced spearfishing workshop' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderParticipant should render a div with a class of participants and a p element with a class of participant and the name of the participant and a p element with a class of participant-contact and the contact info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="participants"><p class="participant">Johnny Steel</p><p class="participant-contact">j.steel@example.com</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant({ name: 'Johnny Steel', contact: 'j.steel@example.com' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
