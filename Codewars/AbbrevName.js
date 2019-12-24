// https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript

function abbrevName(name) {
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}