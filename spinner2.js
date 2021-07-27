process.stdout.write("Hello from spinner.js\n");
process.stdout.write('hello from Milka \rheyyy\n');

const something = "| / - \\ | / - \\ | / - \\ | / - \\ | / - \\ | / - \\ | | | | |"
let counter = 0;
for (let item of something) {
  setTimeout(() => {
    process.stdout.write(item + '\r');
  }, 1000 + counter);
  counter += 150;
}