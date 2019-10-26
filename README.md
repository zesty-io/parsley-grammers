# Parsley Grammer

Parsley is the template language of Zesty.io. Parlsey is used to dynamically pull content into files served on Zesty.io. This is the master repository to manager and create grammar files that support VScode, ATOM, Sublime, Monaco Editor, and other editors that follow standards from TextMate grammars.

The master file is `syntaxes/parsley.YAML-tmLanguage`, all other syntaxes are built using node.js scripts.

## Building Files

### Monaco Editor

`npm run buildMonarch` outputs to `syntaxes/parsley-monarch-tokenizer.json`

### VSCode

`npm run buildJSON` outputs to `syntaxes/parsley.tmLanguage.json`

### ATOM

`npm run buildJSON` outputs to `syntaxes/parsley.tmLanguage.json`

### Sublime

`npm run buildXML` outputs to `syntaxes/parsley.tmLanguage`

### Generic TextMate JSON

`npm run buildJSON` outputs to `syntaxes/parsley.tmLanguage.json`
