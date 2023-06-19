---
description: Understand the structure of a documentation site repository.
sidebar_label: Repository structure
sidebar_position: 2
---

# Doc site repository structure

This page describes the function of each file in your new doc site, based on
[this repository](https://github.com/ConsenSys/docs-template).

## 📁 `.github` folder

```text title="Folder structure"
.github
├── ISSUE_TEMPLATE
│   └── bug_report.md
├── pull_request_template.md
└── workflows
    ├── build.yml
    ├── case.yml
    ├── lint.yml
    ├── pages-deploy.yaml
    └── release.yaml
    
3 directories, 7 files
```

### 📁 `ISSUE_TEMPLATE` folder

Contains the bug report template when opening an issue on GitHub.
You can customize this to your needs.
Note that by GitHub convention, you can't change this name.

### 📄 `pull_request_template.md`

Pull request template when opening a pull request on GitHub.
You can customize this to your needs.
Note that by GitHub convention, you can't change this name.

### 📁 `workflows` folder

Contains all the GitHub actions for the repository.

#### 📄 `build.yml`

Action that builds the docs as they would be built in production, to check for any build errors.

#### 📄 `case.yml`

Action that ensures that all Markdown files have [file names](../contribute/format-markdown.md#file-names)
which are only lower case letters, digits, dashes, or underscores.

#### 📄 `lint.yml`

Action that runs `npm run lint` from `package.json`.
It includes spell checking, TypeScript linting, and CSS styling.

#### 📄 `pages-deploy.yaml`

Action that builds and deploys the docs to GitHub Pages when any commit is made to the `main` branch.

#### 📄 `release.yaml`

Action that checks all recent commits made to `main` branch and automatically cuts a release in line
with [semantic versioning](https://semver.org/).
This action reads the configuration in `.releaserc.js` in the root directory of this repository.

## 📁 `.husky` folder

:::info
[Husky](https://typicode.github.io/husky/#/) is a tool to easily manage Git hooks.
This repository uses it for pre-commits, commit messages, and staged linting.
:::

```text title="Folder structure"
.husky
├── _
│   └── husky.sh
├── commit-msg
├── pre-commit
└── prepare-commit-msg

2 directories, 4 files
```

#### 📄 `commit-msg`

On any commit message, `commitlint` is run to ensure that it is compliant.
This repository uses the
[`config-conventional`](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js)
configuration.
This is specified in `package.json` under the `commitlint` JSON key.

#### 📄 `pre-commit`

Before a commit, `lint-staged` is run to check all staged files for spelling errors, TypeScript
linting, and CSS linting.
This is specified in `package.json` under the `lint-staged` JSON key.

#### 📄 `prepare-commit-msg`

The commit message uses [`git-cz`](https://github.com/commitizen/cz-cli), which is specified in
`package.json` under the `config` JSON key.
It uses `cz-conventional-changelog` which is the
[conventional log standard](https://github.com/conventional-changelog/conventional-changelog).

## 📁 `blog` folder

Contains all the Markdown and related files for the [blog](https://docusaurus.io/docs/blog)
functionality of Docusaurus.

## 📁 `docs` folder

Contains all the Markdown and related files for the [docs](https://docusaurus.io/docs/docs-introduction)
functionality of Docusaurus.

## 📁 `src` folder

Contains all the JSX and CSS files for the [pages](https://docusaurus.io/docs/creating-pages)
functionality of Docusaurus.

```text title="Folder structure"
src
├── components
│   └── HomepageFeatures
│       ├── index.tsx
│       └── styles.module.css
├── css
│   └── custom.css
└── pages
    ├── index.module.css
    ├── index.tsx
    └── markdown-page.md

5 directories, 6 files
```

### 📁 `components` folder

Contains JSX components for React.js which should live separately from the `pages` folder.
JSX components are broken up here with `.tsx` extensions and accompanying scoped `.modules.css`.
You can then import these components into files in the `pages` folder.

### 📁 `css` folder

Contains any non-scoped CSS files.

:::caution important
We recommend leaving the default `custom.css` file by itself in this folder and not add any other files.
`custom.css` is the [global styles](https://docusaurus.io/docs/styling-layout#global-styles) file
that applies to the entire doc site.
:::

### 📁 `pages`

[Pages](https://docusaurus.io/docs/creating-pages) are one-off standalone pages that don't have
sidebars by default.

You can still [add a Markdown page](https://docusaurus.io/docs/creating-pages#add-a-markdown-page) to
this folder, and it will be rendered with the file name as the path.
Routing is file-based for any `.js` and `.tsx` file.

## 📁 `static` folder

Contains assets that can be directly copied on build output.
Usually images, stylesheets, favicons, fonts, etc.

See how to [reference your static asset](https://docusaurus.io/docs/static-assets#referencing-your-static-asset).

```text title="Folder structure"
static
└── img
    ├── docusaurus.png
    ├── favicon.ico
    ├── logo.svg
    ├── logo_dark.svg
    ├── undraw_docusaurus_mountain.svg
    ├── undraw_docusaurus_react.svg
    └── undraw_docusaurus_tree.svg

2 directories, 7 files
```

## 📄 `.cspell.json`

A [spell checker](https://cspell.org/) configuration file used in linting to check for misspelling
in all files.

Includes basic configuration with `ignorePaths` for paths/files which should not be checked.
You can add additional dictionaries, either default supported or additional files, such as the
`project-words.txt` file included in this repository.

## 📄 `.editorconfig`

[EditorConfig](https://editorconfig.org/#overview) is supported by most IDEs and text editors to
provide consistent coding styles for projects using a configuration specification.

## 📄 `.eslintignore`

[ESLint](https://eslint.org/) is used by this project since it contains Javascript, Typescript, and
React code, and lints the code to provide a consistent style for all developers and contributors.

The `.eslintignore` file contains a list of directories for ESLint to ignore when linting.

## 📄 `.eslintrc.js`

Configuration for [ESLint](https://eslint.org/) and accompanying plugins used by it to parse and lint the code.

## 📄 `.gitignore`

A file containing files and folders for Git to ignore when adding or committing.

## 📄 `.nvmrc`

Contains the Node.js version to use for this project.
It requires installing [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

## 📄 `.prettierrc`

We recommend using [Prettier](https://prettier.io/) to format all files.
Anything not covered in `.editorconfig` is overridden or specified in this Prettier configuration file.

When you `git commit` on this repo, `lint-staged` runs `npm run format`, which runs Prettier to
format and save those changes.

## 📄 `.releaserc.js`

[Semantic Release](https://github.com/semantic-release/semantic-release) is used to easily keep
track of version changes to documentation.
On push to the `main` branch, the `release` GitHub action takes all necessary commits based on their
type and increments the version according to [semver](https://semver.org/) conventions.
However, this is not strictly necessary, and you can remove this along with its accompanying action.

## 📄 `.stylelintignore`

[StyleLint](https://stylelint.io/) is used to lint CSS files.
This file ignores directories which do not need to be linted.

## 📄 `.stylelintrc.js`

[StyleLint](https://stylelint.io/) configuration for linting.

## 📄 `CHANGELOG.md`

[Semantic Release](https://github.com/semantic-release/semantic-release) automatically updates the
CHANGELOG file with release history and commits appended to each release.
You shouldn't modify this manually.

## 📄 `api.mustache`

This repository by default has the plugin `docusaurus-plugin-openapi-docs` installed to demonstrate
how to integrate OpenAPI documentation directly into Docusaurus.
The `api.mustache` file contains the API template for the plugin when generating the Markdown files.

## 📄 `babel.config.js`

The Babel configuration used by Docusaurus.
You shouldn't modify this.

## 📄 `docusaurus.config.js`

Contains all major Docusaurus configuration which is necessary to configure its behavior.

## 📄 `package-lock.json`

Used by npm when `npm install` is used to lock versions and reduce differences between development
environments if this isn't committed to the repository.
It should not be necessary to edit this file.

## 📄 `package.json`

Used by npm and contains configuration scripts, dependencies, development dependencies, and other
related dependency configurations.

## 📄 `project-words.txt`

Used by CSpell in the `.cspell.json` configuration file with additional project words that should
not be flagged as misspelling when linting.
Please add your project words here periodically as this is the master file that all repositories use.

## 📄 `sidebars.js`

Separate `.js` file used by Docusaurus to provide [sidebar configuration](../contribute/configure-docusaurus.md#sidebar).

## 📄 `tsconfig.json`

This project uses Typescript for React.
The `tsconfig.json` contains Typescript compiler options but isn't used in compilation of the
project and is only for editor experience.
