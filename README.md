# Lackey Example Website

Repo serves several purposes:

- Example Lackey CMS powered website instance example
- Boilerplate for the configuration of new projects
- Source for the live Lackey CMS website [https://lackey.io](https://lackey.io)

## Requirements

 * Node 4+
 * PostgreSQL 9.5+
 * Lackey `>=0.7`

## Quick Start

Clone this project

```
git clone git@github.com:getlackey/lackey-cms-site.git
```

Install node dependencies

```
npm i
```

Create database

```sh
createdb lackey-cms-site
```

Build resources and run application in development mode

```sh
gulp lackey.build
gulp dev
```

## Usage

Navigate to `http://localhost:8880`

## Manage

Navigate to `http://localhost:8880/login` and login with

 * email `development@enigma-marketing.co.uk`
 * password `password`

## Resources

 * Read comments in https://github.com/getlackey/lackey-cms-site/blob/master/modules/core/module.yml and other YAML files in https://github.com/getlackey/lackey-cms-site/tree/master/modules/core/config
 * Lackey Repository https://github.com/getlackey/lackey-cms
 * Lackey open manual https://sielay.gitbooks.io/lackey/content/

## Security Disclosure

Security is very important to us. If you have any issue regarding security, please disclose the information responsibly by sending an email to security@lackey.io and not by creating a GitHub issue.

## License

The MIT License (MIT)

Copyright (c) 2016 Enigma Marketing Services Ltd.

---

Get Involved on [GitHub](https://github.com/getlackey) or Follow [@getlackey](https://twitter.com/GetLackey) on twitter.

Open sourced by [Enigma](https://enigma-marketing.co.uk)
