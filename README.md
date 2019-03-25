eslint-formatter-json-relative
==============================

ESlint [formatter](https://eslint.org/docs/user-guide/formatters/) which returns the ESlint result as JSON, but
all absolute paths are replaced with relative paths based on the current working directory (the directory the 
ESlint command is executed from).

## Installation

Use `npm i eslint-formatter-json-relative --save-dev`

## Usage

Run ESlint with this formatter:

```
eslint -f json-relative ./path/to/src/
```

Write the result of the formatter into a file:

```
eslint -f json-relative -o out.json ./path/to/src/
```
