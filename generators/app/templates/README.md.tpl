![Codeship Status for devialab/<%= appName %>](https://codeship.com/projects/projectid/status?branch=master)


# Project Management

* [CI](https://codeship.com/projects/projectid)
* [Basecamp](https://3.basecamp.com/projects/id)
* [GIT](https://bitbucket.org/devialab/<%= appName %>)
* [Kanban](https://tree.taiga.io/project/<%= appName %>/backlog)
* [Chat](https://devialab.slack.com/messages/<%= appName %>/)
* [Locales](https://webtranslateit.com/en/projects/id)


# Environments

* Integration: http://webapp-int.<%= appName %>.com/


# Installation

```
gem install compass
npm install -g bower protractor
npm install
webdriver-manager update
```


# Run project

* Dev mode
	
	```
	grunt serve
	```

* Prod mode (optimized)

	```
	grunt serve:dist
	```

## Supported options

  * **serverPort** (`9000`): Change server port.
  * **testPort** (`9001`): Change test port
  * **liveReloadPort** (`35729`): Change liveReload port

	```
	grunt serve --serverPort 9003 --testPort 1234
	```


# Build project

```
grunt build
```


# Set environment config

Build/run project with specific environment config.

Supported values: `int` `prod`

```
grunt build --env int
grunt serve --env prod
```


# Run tests

* Unit

	```
	grunt test
	```

* End-2-End

	```
	npm run webdriver
	```

	```
	grunt test:e2e
	```


# Download latest locales

Download latest locales from [webtranslateit.com](https://webtranslateit.com)

	```
	grunt locales
	```


# Release

```
grunt release:1.2.3
```
