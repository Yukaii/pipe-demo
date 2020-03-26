pipe-demo
=========

So this is just a quick demo on how piping would work with oclif multi command.

Run

```bash
echo 'Hello World' | ./bin/run hello | ./bin/run hello
```

And you get `Hello World`


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pipe-demo.svg)](https://npmjs.org/package/pipe-demo)
[![Downloads/week](https://img.shields.io/npm/dw/pipe-demo.svg)](https://npmjs.org/package/pipe-demo)
[![License](https://img.shields.io/npm/l/pipe-demo.svg)](https://github.com/Yukaii/pipe-demo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pipe-demo
$ pipe-demo COMMAND
running command...
$ pipe-demo (-v|--version|version)
pipe-demo/0.0.0 darwin-x64 node-v12.4.0
$ pipe-demo --help [COMMAND]
USAGE
  $ pipe-demo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pipe-demo hello [FILE]`](#pipe-demo-hello-file)
* [`pipe-demo help [COMMAND]`](#pipe-demo-help-command)

## `pipe-demo hello [FILE]`

describe the command here

```
USAGE
  $ pipe-demo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pipe-demo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Yukaii/pipe-demo/blob/v0.0.0/src/commands/hello.ts)_

## `pipe-demo help [COMMAND]`

display help for pipe-demo

```
USAGE
  $ pipe-demo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
