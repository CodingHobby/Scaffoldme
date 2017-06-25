const prompt = require('prompt'),
	shell = require('shelljs'),
	fs = require('fs'),
	colors = require('colors/safe')

module.exports = (args, options, logger) => {
	// First of all we want to check if a variant was passed from the command line, otherwise we want to set it to 'default'
	const variant = options.variant || 'default'
	const templatePath = `${__dirname}/../templates/${args.template}/${variant}`
	const localPath = process.cwd()

	if (fs.existsSync(templatePath)) {
		// Log out what we're doing
		logger.info('Copying files…')
		// Recursively copy files
		shell.cp('-R', `${templatePath}/*`, localPath)
		logger.info(' The files have been copied!')
	} else {
		// Send an error message and exit the process
		logger.error(`The requested template for ${args.template} wasn't found.`)
		process.exit(1)
	}
	// Require the variable list we use
	const variables = require(`${templatePath}/_variables`)
	// If we alreaedy copied the file we want to delete from the current directory
	if(fs.existsSync(`${localPath}/_variables.js`)) {
		shell.rm(`${localPath}/_variables.js`)
	}

	logger.info('Please fill in the form...')
	// Get a list of variables (from the list of variables in the `variables` file)
	prompt.start().get(variables, (err, result) => {
		// Loop over each file
		shell.ls('-Rl', '.').forEach(entry => {
			// Make sure we're not looking at a directory
			if(entry.isFile()) {
				// Loop over the variables and substitue them into the file
				variables.forEach(variable => {
					// shelljs.sed() lets you replace reg expressions in a file with some value
					shell.sed('-i', `\\[${variable.toUpperCase()}]`, result[variable], entry.name)
				})
			}
		})
		logger.info('Success!')
	})
}
