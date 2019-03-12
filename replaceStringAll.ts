// Main functiom
export async function someLogic(): Promise<string> {
    let myString = 'AAbbCCAA';
    console.log('start: ' + myString);
    myString = replaceAllString(myString, 'A', 'a');
    myString = replaceAllString(myString, 'b', 'B');
    myString = replaceAllString(myString, 'C', 'c');
    console.log('end: ' + myString);
    return myString;
}

// helper function
function replaceAllString(input: string, search: string, replacement: string): string {
    return input.split(search).join(replacement);
}
