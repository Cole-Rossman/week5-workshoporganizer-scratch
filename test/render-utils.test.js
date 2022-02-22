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

test('renderParticipant should render a div with a class of participants and a p element with a class of participant and the name of the participant', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="participants"><p class="participant">Johnny Steel</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant({ name: 'Johnny Steel' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
