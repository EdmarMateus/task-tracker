import	{ command } from "./command.js";
import	commandListJSON from "./store/commandList.json" with { type: "json" };

function	throwErrors(args: string [], commandList: typeof commandListJSON["command-list"])
{
	if (!args || !args.length || !args[0])
		throw ("No arguments detected.\n./task-track <command> [ARG1] [ARG2]");
	if (!(args[0] in commandList))
		throw (`{${args[0]}} is a invalid command!`);
}

function	getCMD(args: string[], commandList: typeof commandListJSON["command-list"]): string
{
	if (args[0] === 'list')
	{
		let	dbListTools: string [] = ['done', 'todo', 'in-progress'];
		if (!(`${args[1]}` in dbListTools))
			throw(`${args[1]} is not a list command tool!`);
		return (`list ${args[1]}`);
	}
	return (`${args[0]}`);
}

function	parser(args: string []): command
{
	let	cmd: string;
	let	content: string;
	let	commandList = commandListJSON["command-list"];

	throwErrors(args, commandList);
	cmd = getCMD(args, commandList);
	content = (args.length > 1)? `${args[1]}` : '';
	return (new command(cmd, content));
}

export	function taskTracker(args: string[]): void
{
	try
	{
		const	prompt: command = parser(args);
		console.log(prompt)
	}
	catch (e)
	{
		console.error(e);
	}
}
