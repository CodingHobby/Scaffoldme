# Scaffoldme

Scaffoldme is an experiment to build a simple scaffolding app, kinda like Yeoman, but easier to create templates for. Right now, sadly, you'll have to copy the template folder in the root of this library, although I'm currently working on a command to automatically copy it through a command.

The way this works is you basically can use the command `scaffoldme create <template> --variant <variant>` to scaffold a template. If you do not specify a variant the script will automatically load the `default` variant.

How the script works is it looks in the `templates/<template>/<variant>` folder and copies it in the current directory, while also substituting the variables in the different files.

This is what the file structure should look like:

```
templates
└─── <template>
     ├─── default
     |    ├─── _variables.js
     |    └─── src
     └─── <variant>
          ├───_variables.js
          └───src
```

You should have a folder for each template, and it must contain a folder for each variant (the default folder is what gets used if you don't specify a variant from the CLI)

The `_variables` file is where you store all the variables you need to replace in your files, where you can signal the variables to replace as `[VARIABLE]` (notice that the variable name must be in upper case and between square brackets)

Have fun!