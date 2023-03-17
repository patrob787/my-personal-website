const submit = document.getElementById('button');
const questionBox = document.getElementById('textbox');

const answer = () => {
    if (questionBox.value.length > 0) {
        let num = Math.floor(Math.random() * 8);
        if (num === 0) {
            alert('It is all but certain!');
        } else if (num === 1) {
            alert('It is most likely to pass!');
        } else if (num === 2) {
            alert('It is possible! Be patient.');
        } else if (num === 3) {
            alert('It is hard to tell for certain, but the signs are in your favor.')
        } else if (num === 4) {
            alert('The signs are unclear around your question.  Try asking again later.');
        } else if (num === 5) {
            alert('It does not look promising my friend.')
        } else if (num === 6) {
            alert('I would not hold out too much hope.')
        } else if (num === 7) {
            alert('I am sorry to say that it is very unlikely.')
        };
    } else {
        alert('Please enter a question.');
    };
};

submit.addEventListener('click', answer);