
let var1 = ["Hello, Hello", "Hello, Hi", "Hello, Hallo"];
let var2 = 0;

window.addEventListener('load', function() {
    let button = document.querySelector('#appbuttonid');
    let header1 = document.getElementById('appheaderid');
    let header2 = document.getElementById('appnumid');

    button.addEventListener('click', function() {
        var2++;
        header2.textContent = var2++;
    });

    switch(var2){
        default:
        case var2 = 0:
            header1.textContent = "Hello";
            break;
        case var2 = 10:
            header1.textContent = "Im Under The Water";
            break;
        case var2 = 20:
            header1.textContent = "Please Help me";
            break;
    }
});