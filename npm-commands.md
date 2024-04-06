# NPM

## Package.json lifecycle:

We can have pre, post prepended to any command (from scripts object in package.json), note that some of the command like start, build etc seems to be internally used(reserved by npm) so having pre/post for them is useless and it will not work. So best case would be to use them with custom commands.

## npm ci

#### referred as clean install or continuous integration

#### installs dependecies from package-lock.json but uses package.json to validates dependencies. If mismatch found then the command will throw an error and exit.

#### it first removed node_modules then installs the deps(clean install as the name suggests)

#### this command will neither update package.json nor package-lock.json

## flags used with npm i

### --save or -s:

default one, no need to explicitly specify. The packages are installed using this flag are listed under dependencies object

### --save-dev or -D:

Use this packages which are required only for development purpose. The packages are listed under devDependencies

### --no-save:

Installs packages without making entry in package.json

### --global or -g:

Installs packages globally

### --production:

Installs packages by looking at dependecies object only. Useful in production.

### --legacy-peer-deps:

Allows installation of legacy peer deps

### --dry-run:

Check if installation can be successfull or not, it will not actually install pacakges.

### --audit:

Check vulnerabilities (Security)

### --package-lock-only:

Updates package-lock.json without installing any packages

### --help:

support commands

### --prefer-offline:

Installs packages from local cache.

### --offline:

Force install from local cache but it will throw an error if pacakges are not avail in local cache
