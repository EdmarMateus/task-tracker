import	{ command } from "../class/command.js";
import	{ throwErrors } from "../utils/errorManager.js";

function	getCMD(args: string[], commandList: object): string
{
	if (args[0] === 'list' && args.length > 1)
	{
		let	dbListTools: string [] = ['done', 'todo', 'in-progress'];

		if (!(`${args[1]}` in dbListTools))
			throw(`${args[1]} is not a list command tool!`);
		return (`list ${args[1]}`);
	}
	return (`${args[0]}`);
}

export	function	parser(args: string [], commandList: object): command
{
	let	cmd: string;
	let	content: string;

	throwErrors(args, commandList);
	cmd = getCMD(args, commandList);
	content = (args.length > 1)? `${args[1]}` : '';
	return (new command(cmd, content));
}