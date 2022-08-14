function textAreaFunc() {
    // clear all child node before append
    document.getElementById('root').innerHTML = '';

    // get all text
    allText = document.getElementById('textarea').value;
    lines = allText.split('\n');
    console.log(lines);

    // fetch all line
    lines.forEach((element) => {
        decisionMaker(element);
    });
}

function decisionMaker(str = '') {
    let splited = str.split(' ');

    if (splited[0] == '#') {
        // remove first word
        let rm = str.substring(str.indexOf(' ') + 1);
        createNode(rm, 'h2');
    } else if (splited[0] == '##') {
        let rm = str.substring(str.indexOf(' ') + 1);
        createNode(rm, 'h3');
    } else if (splited[0] == '###') {
        let rm = str.substring(str.indexOf(' ') + 1);
        createNode(rm, 'h4');
    } else if (splited[0] == '>') {
        let rm = str.substring(str.indexOf(' ') + 1);
        createNode(rm, 'blockquote');
    } else if (splited[0] == '---') {
        createNode('', 'hr');
    } else {
        createNode(str, 'p');
    }
}

function createNode(text = '', node) {
    const elm = document.createElement(node);
    const txt = document.createTextNode(text);
    elm.appendChild(txt);
    document.getElementById('root').appendChild(elm);
}
