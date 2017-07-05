const prompt = require('prompt'),
	shell = require('shelljs'),
	fs = require('fs'),
	path = require('path'),
	colors = require('colors/safe')

module.exports = (args, options, logger) => {
	const root = path.resolve(__dirname)
	const templatesDir = path.resolve(`${root}/../templates`)
	let templates = []
	let tempDirs
	
	try {
		tempDirs = fs.readdirSync(templatesDir)
	} catch(e) {
		logger.error(`Error while reading templates:\n${colors.red(err)}`)
		process.exit(1)
	}

	tempDirs.forEach((tempDir, i) => {
		let template = {
			name: tempDir,
			variants: []
		}
		let variants
		try {
			variants = fs.readdirSync(path.resolve(`${root}/../templates/${tempDir}`))
		} catch(e) {
			logger.error(`Error while reading variants:\n${colors.red(err)}`)
			process.exit(1)	
		}
		variants.forEach(variant => template.variants.push(variant))
		templates.push(template)
	})

	if (templates.length === 0) {
		logger.info(`You have no templates!\nAdd templates with the command ${colors.yellow("scaffoldme add <name>")}`)
	}	else {
		console.log('\n')
		logger.info(`You have ${colors.green(templates.length)} templates:\n_______________________\n`)
		templates.forEach(template => {
			logger.info(template.name)
			template.variants.forEach(variant => logger.info(`  - ${variant}`))
		})
		console.log('\n')
	}
}