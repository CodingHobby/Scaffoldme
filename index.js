#!/usr/bin/env node
const prog = require('caporal')
const createCmd = require('./lib/create')
const addCmd = require('./lib/add')

prog
	.version('1.0.0')
	.command('create', 'Create a new application')
	.argument('<template>', 'Template to use')
	.option('--variant <variant>', 'Which <variant> of the template is going to be created')
	.action(createCmd)

	.command('add', 'Add a template')
	.option('--name <name>', '<name> of the new template (automatically set to working directory)')
	.action(addCmd)

prog.parse(process.argv)