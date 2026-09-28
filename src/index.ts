#!/usr/bin/env node
import	{ taskTracker } from "./taskTracker.js"
const	args: string[] = process.argv.slice(2);

taskTracker( args );
