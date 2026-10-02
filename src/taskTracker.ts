import	{ parser } from "./utils/parser.js"
import	{ command } from "./class/command.js";
import	commandListJSON from "./store/commandList.json" with { type: "json" };

export	function taskTracker(args: string[]): void
{
	try
	{
		const	prompt: command = parser(args, commandListJSON["command-list"]);
		console.log('Sodier Boy!')
		console.log(prompt)
	}
	catch (e)
	{
		console.error(e);
	}
}
