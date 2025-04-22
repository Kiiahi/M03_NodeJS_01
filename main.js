// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations:Handles users input data
process.stdin.on('data', function(data) {

// Operations:converts input data to a string , trims whitespace , and assigns it to name
 const name = data.toString().trim();
          
// Operations:outputs greeting with the name to the console
console.log(`Hello, ${name}!`);

      
});
