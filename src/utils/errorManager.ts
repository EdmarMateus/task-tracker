import { getHelp } from "./getHelp.js";

export	function	throwErrors(args: string [], commandList: any)
{
	if (!args || !args.length || !args[0])
		throw ("No arguments detected.\n./task-track <command> [ARG1] [ARG2]");
	if (!(args[0] in commandList))
	{
		throw (`{${args[0]}} is a invalid command!\n` + getHelp());
	}
}
