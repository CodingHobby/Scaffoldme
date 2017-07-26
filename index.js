#!/usr/bin/env node

const prog = require('caporal')
const createCmd = require('./lib/create')
const addCmd = require('./lib/add')
const listCmd = require('./lib/list')
const removeCmd = require('./lib/remove')

prog
	.version('1.0.0')
	.command('create', 'Create a new application')
	.argument('<template>', 'Template to use')
	.option('--variant <variant>', 'Which <variant> of the template is going to be created')
	.action(createCmd)

	.command('add', 'Add a template')
	.option('--name <name>', '<name> of the new template (automatically set to working directory)')
	.action(addCmd)

	.command('list', 'Lists all templates')
	.action(listCmd)

	.command('remove', 'Remove a template')
	.argument('<template>', 'Template to remove (automatically set to working directory name)')
	.action(removeCmd)

prog.parse(process.argv)