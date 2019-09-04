

const changeText = () => {
    const testElement = document.getElementById('test')
    testElement.innerText = 'Bhavshi'

    document.getElementsByTagName('body')
}

window.addEventListener('DOMContentLoaded', changeText);

window.addEventListener('load', (event) => {

    const testElement = document.getElementById('test')
    testElement.innerText = 'Cindy'

});

console.log(document.getElementById('start-stop').innerHTML)