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
