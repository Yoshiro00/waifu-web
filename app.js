let header1 = document.getElementById('appheaderid');
let var1 = ["Hello, Hello", "Hello, Hi", "Hello, Hallo"];
let var2 = 0;

window.addEventListener('load', function() {
    let button = document.querySelector('#appbuttonid');
    let header2 = document.getElementById('appnumid');

    button.addEventListener('click', function() {
        var2++;
        header2.textContent = var2++;
    });
});

function MiniTextBot() {
    let inputBox = document.getElementById("inputText").value;
    let buttonShow = document.querySelector('#linkid1');
    let text;

    switch(inputBox){
        case inputBox = "Hello":
            text = "Hi";
            break;
        case inputBox = "What is your name?":
            text = "My Name is.....";
            break;
        case inputBox = "How are you?":
            text = "I'm good, how about you? :)";
            break;
        case inputBox = "01195":
            text = "tap this link";
            buttonShow.style.left = "30%";
            break;
        default:
            text = "i don't know that word yet or maybe your missing something";
    }
    document.getElementById("appheaderid").innerHTML = text;
}