const prompt = require('prompt'),
	shell = require('shelljs'),
	fs = require('fs'),
	path = require('path'),
	colors = require('colors/safe')

module.exports = (args, options, logger) => {
	// Either use the "name" parameter from the options or use the current directory name
	const templateName = args.template || path.parse(process.cwd()).name
	// The directory of the template we want to copy
	const templateRoot = process.cwd()
	const root = path.resolve(__dirname)
	// The directory we want to copy to
	const dirToDelete = path.resolve(`${root}/../templates/${templateName}/`)
	// If the directory already exists then delete it
	if(fs.existsSync(dirToDelete)) {
		logger.info(colors.yellow('\nDeleting files...'))
		shell.rm('-R', dirToDelete)
	} else {
		logger.error(colors.red(`The template ${templateName} does not exist`))
		process.exit(1)
	}
	logger.info(colors.green(`\nTemplate ${templateName} was removed successfully`))
}