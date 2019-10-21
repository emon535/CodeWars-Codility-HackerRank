String.prototype.camelCase = function () {
    //your code here
    let str = this.valueOf().split(" ").filter(value => {
        return Boolean(value);
    }).map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }).join("");



    console.log(str)
    return str;
}