function textAreaFunc() {
    let txtarea = document.getElementById('textarea');

    // clear all child node before append
    document.getElementById('root').innerHTML = '';

    // text area height
    let lineNumber = txtarea.value.split('\n').length;
    if (lineNumber > 5) {
        console.log(lineNumber);
        txtarea.rows = lineNumber;
    }

    // get all text
    allText = txtarea.value;
    lines = allText.split('\n');

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
