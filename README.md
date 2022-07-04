# About The project

This project aims to automate the process of creating Anki cards. To create cards, in batch, you can write a simple LaTeX document which is then transformed into markdown and csv file. The latter is used to be imported into Anki. The former is simplified LaTeX document for reading without compiler LaTeX document.

## Template

Easy to use command line interface for creating a template that is used to batch write Anki cards in LaTeX format. Although not necessary, yet very handy and time saving.

## Built with

- Node.js
- TypeScript
- commander.js

# Getting started

To get started you need installed Node.js LTS 14.x or later alongsite other tools.

## Prerequisites

- Node.js LTS 14.x or later
- TypeScript

## Installation

1. Install Node.js
2. Clone the repo

```bash
git clone https://github.com/janmerhar/LaTeX_manipulator
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

# Usage

Scripts are located in `bin` folder. You can run them with `node`. Note, you need to compile TypeScript into JavaScript before you can run them.

## Template CLI

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
