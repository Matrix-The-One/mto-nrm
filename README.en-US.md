<p align="center">
  中文 | <a href="./README.en-US.md">English</a> 
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/v/mto-nrm.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/mto-nrm?minimal=true"><img src="https://img.shields.io/npm/dm/mto-nrm.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/l/mto-nrm.svg?sanitize=true" alt="License"></a>
</p>

# mto-nrm

A library for easy registry switching

## Install

```sh
npm install mto-nrm -g
```

## Example

- interactive selection registry

```sh
mto-nrm ls

> npm --------------- https://registry.npmjs.org/
  yarn -------------- https://registry.yarnpkg.com/
  taobao ------------ https://registry.npmmirror.com/
  tencent ----------- https://mirrors.cloud.tencent.com/npm/
```

- command selection registry

```sh
mto-nrm use taobao
```

- use yarn

```sh
mto-nrm use taobao -e yarn
```

## Usage

```text
Usage: mto-nrm [options] [command]

A library for easy switching of the npm registry

Options:
  -V, --version               output the version number
  -h, --help                  display help for command

Commands:
  ls [options]                interactive selection registry
  use [options] <name>        command selection registry
  get [options] [name]        get registry
  set [options] <name>        set registry
  home [options] [name]       view registry home
  view [options] [name]       view registry
  add <name> <url> [home]     add registry
  update [options] <name>     update registry
  del <name>                  delete registry
  clear                       clear registry
  test [options] [nameOrUrl]  test registry
  config                      get config file path
  help [command]              display help for command
```

### get

- get registry

```sh
mto-nrm get
```

- get the specified registry

```sh
mto-nrm get taobao
```

### set

- set registry

```sh
mto-nrm set https://registry.npmmirror.com/
```

### home

- get home

```sh
mto-nrm home
```

- get the specified home

```sh
mto-nrm home taobao
```

### view

- view registry

```sh
mto-nrm view
```

- view the specified registry

```sh
mto-nrm view taobao
```

### add

- add registry

```sh
mto-nrm add cnpm http://r.cnpmjs.org/ http://r.cnpmjs.org/
```

### update

- update registry

```sh
mto-nrm update cnpm -u=http://r.cnpmjs.org/ -h=http://r.cnpmjs.org/
```

### del

- delete registry

```sh
mto-nrm del cnpm
```

### clear

- clear registry

```sh
mto-nrm clear
```

### test

- test registry

```sh
mto-nrm test
```

- test the specified registry

```sh
mto-nrm test taobao
```

### config

- get config file path

```sh
mto-nrm config
```

## Node Usage

```ts
import mtonrm from 'mto-nrm'

mtonrm.use('taobao')
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Matrix-The-One

[npm]: https://www.npmjs.com
