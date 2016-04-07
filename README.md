# AngularJS generator by [Devialab](http://devialab.com)

An AngularJS generator for generic Devialab webapp project

> Yeoman generator for AngularJS - lets you quickly set up a project with sensible defaults and best practices.

## Usage

Install `yo`, `grunt-cli`, `bower` and `generator-devialab-angular`:
```
npm install -g grunt-cli bower yo generator-devialab-angular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo devialab-angular`:
```
yo devialab-angular
```

Run `grunt` for building and `grunt serve` for preview


## Generators

Available generators:

* [devialab-angular](#app) (aka [devialab-angular:app](#app))
* [devialab-angular:module](#module) (aka [devialab-angular:module](#module))
* [devialab-angular:directive](#directive) (aka [devialab-angular:directive](#directive))

### App
Sets up a new AngularJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-translate, angularitics, ...

Example:
```bash
yo devialab-angular
```

### Module
Sets up a new AngularJS module, generating all the boilerplate you need to define a new module.

Example:
```bash
yo devialab-angular:module
```

### Directive
Sets up a new AngularJS directive, generating all the boilerplate you need to define a new element directive.

Example:
```bash
yo devialab-angular:directive
```

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-bootstrap
* angular-translate
* angular-sanitize
* angular-ui-router
* angular-corbel
* ngstorage
* angulartics
* angular-moment


The following additional modules are available as components on bower, and installable via `bower install`:

* angular-animate
* angular-aria
* angular-cookies
* angular-messages
* angular-resource

All of these can be updated with `bower update` as new versions of AngularJS are released.

