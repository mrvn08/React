 const add = (a, b) => a + b;
 const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

 test('Should add 2 numbers', () => {
    const result = add(3, 4);

    // if (result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
    // }
    //Another way of doing it with Jest
    expect(result).toBe(7);
 });

 test('Greeting with name', () => {
     expect(generateGreeting('Marvin')).toBe('Hello Marvin');
 });

 test('Greeting with name with default', () => {
    expect(generateGreeting()).toBe('Hello Anonymous');
});