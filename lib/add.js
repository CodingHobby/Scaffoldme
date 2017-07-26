const prompt = require('prompt'),
	shell = require('shelljs'),
	fs = require('fs'),
	path = require('path'),
	colors = require('colors/safe')

module.exports = (args, options, logger) => {
	// Either use the "name" parameter from the options or use the current directory name
	const templateName = options.name || path.parse(process.cwd()).name
	// The directory of the template we want to copy
	const templateRoot = process.cwd()
	const root = path.resolve(__dirname)
	// The directory we want to copy to
	const copyTo = path.resolve(`${root}/../templates/${templateName}/`)
	logger.info('\nCopying files...')
	// If the directory already exists then delete it
	if(fs.existsSync(copyTo)) {
		shell.rm('-R', copyTo)
	}
	// Make a new dir and copy the files into it
	shell.mkdir(copyTo)
	shell.cp('-R', `${templateRoot}/*`, copyTo)
	logger.info('_____________________________')
  logger.info(colors.green('\nFinished!'))
	logger.info(`\nNow you can use the command ${colors.yellow(`scaffoldme create ${templateName} --variant <variant>`)} to scaffold your app!`)
}