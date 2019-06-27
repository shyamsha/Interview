// function greeting(parameterVariable) {
//     // This line prints 'Hello, World!' to the console:
//     console.log('Hello, World!');

//     // Write a line of code that prints parameterVariable to stdout using console.log:
//     console.log(parameterVariable);
// }
// greeting('hello javascript')


// function main() {
//     const parameterVariable = readLine();

//     greeting(parameterVariable);
// }


function vowelsAndConsonants(s) {
    let values = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            console.log(s[i])
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (s[j] !== 'a' && s[j] !== 'e' && s[j] !== 'i' && s[j] !== 'o' && s[j] != 'u') {
            console.log(s[j])
        }
    }

}
console.log(vowelsAndConsonants('javascriptloops'))