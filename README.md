# Scaffoldme

Scaffoldme is an experiment to build a simple scaffolding app, kinda like Yeoman, but easier to create templates for.

## Making a template

Making a template is really easy:

You simply create a folder with the name of the template you want to use, create subdirectories for each `variant` of the template (if you don't want to use any variants just place all your files inside the `default` subdirectory) and you're done!

Each `variant` folder should contain a `_variables.js` file, which just contains a `module.exports` statement with a list of all the variables you want to be replaced in your file, for example:

```
module.export = [
  "author",
  "version",
  "name"
]
```

In your files you'll then be able to use variables by writing the variable name in upper case and enclosing it in square brackets: `[VARIABLE]`.

Here's what the file structure of a template should look like:

```
<template>
     ├─── default
     |    ├─── _variables.js
     |    └─── src
     └─── <variant>
          ├───_variables.js
          └───src
```

## CLI Commands

Once you replicate the template file structure on your system, you can add a template to the CLI by going into the template directory and using the command `scaffoldme add --name <name>`, where the default template name is the working directory's name.

Once you've done that you can scaffold the template into your directory with the command `scaffoldme create <template> --variant <variant>`, which will ask you the value for each variable in your `_variables.js` file and will substitute them into the template files. If no `variant` parameter is provided the command automatically assumes you want to use the `default` variant.

To list all of the templates you have registered and their variants you can simply run the command `scaffoldme list`, and everything will be outputted. If you get any errors, you might want to check your file structure: it's likely you forgot to put your template in a `default` variant folder!

To remove a template you can use the command `scaffoldme remove <template>`, which will unregister a template from the CLI. If no `template` argument is provided the CLI will automatically assume the template name is the working directory's name.

Have fun!