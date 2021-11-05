const path = require('path');
const fs = require('fs');
const { stdout, stdin, exit } = process;
const readline = require( 'readline' );
const rl = readline.createInterface(process.stdin, process.stdout);
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

rl.setPrompt(`Введите, пожалуйста, текст для записи в файл text.txt\n`);
rl.prompt();
rl.on('line', (chunk) => {
	if (chunk === 'exit' || chunk === 'Exit' || chunk === 'EXIT'){
		rl.close();
	} else{
		output.write(chunk + '\n')
	}
});
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));