# About The project

This project aims to automate the process of creating Anki cards. To create cards, in batch, you can write a simple LaTeX document which is then transformed into markdown and csv file. The latter is used to be imported into Anki. The former is simplified LaTeX document for reading without compiler LaTeX document.

Easy to use command line interface for creating a template that is used to batch write Anki cards in LaTeX format. Although not necessary, yet very handy and time saving. You can easily create Anki cards using [txmanipulator](https://github.com/janmerhar/txmanipulator).

## Built with

- Node.js
- TypeScript
- commander.js

# Getting started

To get started you need installed Node.js LTS 14.x or later alongside other tools.

## Prerequisites

- Node.js LTS 14.x or later
- TypeScript

## Installation

1. Install Node.js
2. Clone the repo

```bash
git clone https://github.com/janmerhar/txtemplate
```

3. Install NPM packages

```bash
npm install
```

4. Install TypeScript

```bash
npm install typescript -g
```

5. Run TypeScript compiler

```bash
npm run build
```

6. Compiled JavaScript code will be available inside `dist` folder.

# Usage

Script is located in `bin` folder. You can run it with `ts-node`. Note, if you want to run JavaScript script, you fill find compiled executable in `dist/bin` folder.

## Template CLI

To use CLI you need to install package from NPM using `npm install txtemplate -g`. Afterwards you can run the CLI using `txtemplate` command.

```
Usage: template [options]

Options:
  -f, --file-name <strings...>  Name of the LaTeX output file
  -t, --title <string...>       Title given by the user
  -d, --date <strings...>         Date given by the user (default: "2021-07-27")
  -a, --author <strings...>     Author(s) (default: "")
  -p, --packages <strings...>   packages added to \usepackage
  -s, --sections <number>       Number of sections in the document
  -h, --help                    display help for command

```

## Contributing

To contribute to this project follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add some changes'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a pull request
