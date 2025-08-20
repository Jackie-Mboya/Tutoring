// Get the output paragraph
const output = document.getElementById('output');

function changeText() {
    // innerText changes the text content only
    output.innerText = 'This is plain new text!';
}

function changeHTML() {
    // innerHTML changes the content and can include HTML tags
    output.innerHTML = 'This is <strong>bold</strong> new text!';
}
        
function writeNewPage() {
    // document.write replaces the entire page content
    document.write('<h1>A completely new page!</h1>');
}
