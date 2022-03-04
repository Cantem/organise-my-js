# javascriptdocs

This is an interactive coding environment. You can write Javascript, see it executed and document using markdown.

- click any text cell to edit it
- the code in each cell is joined into one file. If you define one variable in cell#1, you can refer to it in any following cell
- you can use the built-in `show` function to see any React Component, string, number or anything else.
- you can add new cells (code or text) by hovering on the divider between cells.

All your changes get saved into a file you opened `javascriptdocs` with. For example, if you run `npx javascriptdocs serve test.js`, all of the text and code will be saved into the `test.js` file.

## Available Scripts

### `npm i javascriptdocs -g`

Install package globally

### `npx javascriptdocs serve`

Run package on the default port locally.

### `npx javascriptdocs --help`

See available scripts
