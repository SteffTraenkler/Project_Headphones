let input = document.getElementById('suggestions');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let newsletter = document.getElementById('news')
let submit = document.getElementById('submit');
console.log(submit);

function Form() {
    console.log("Name: " + Name.value);
    console.log("E-Mail: " + email.value);
    console.log("My suggestion: ' " + input.value + "'");
    Box();
}

function Box() {
    console.log("I want your newsletter: ");
    console.log(newsletter.checked);
    return Box;
}