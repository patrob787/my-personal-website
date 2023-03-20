const submit = document.getElementById('button');
const questionBox = document.getElementById('textbox');

const answer = () => {
    let text;
    if (questionBox.value.length > 0 && questionBox.value[questionBox.value.length - 1] === '?') {
        let num = Math.floor(Math.random() * 8);
        if (num === 0) {
            text = 'It is all but certain!';
        } else if (num === 1) {
            text = 'It is most likely to pass!';
        } else if (num === 2) {
            text = 'It is possible! Be patient.';
        } else if (num === 3) {
            text = 'It is hard to tell for certain, but the signs are in your favor.'
        } else if (num === 4) {
            text = 'The signs are unclear around your question.  Try asking again later.';
        } else if (num === 5) {
            text = 'It does not look promising my friend.'
        } else if (num === 6) {
            text = 'I would not hold out too much hope.'
        } else if (num === 7) {
            text = 'I am sorry to say that it is very unlikely.'
        };
    } else {
        text = 'Please enter a question.';
    };
    document.getElementById('reveal').textContent = text;
};

submit.addEventListener('click', answer);