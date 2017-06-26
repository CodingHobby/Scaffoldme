# Scaffoldme

Scaffoldme is an experiment to build a simple scaffolding app, kinda like Yeoman, but easier to create templates for.

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

To add a new template you can run the command `scaffoldme add --name <name>`, where name is the name of the new template. If you omit the `name` parameter then the name of the current working directory gets assigned.

Have fun!