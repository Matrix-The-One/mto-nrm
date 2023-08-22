<p align="center">
  中文 | <a href="./README.en-US.md">English</a> 
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/v/mto-nrm.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/mto-nrm?minimal=true"><img src="https://img.shields.io/npm/dm/mto-nrm.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/l/mto-nrm.svg?sanitize=true" alt="License"></a>
</p>

# mto-nrm

A library for easy switching of the npm registry

## Install

```sh
npm install mto-nrm -g
```

## Example

- interactive selection registry.

```sh
mto-nrm ls

> npm -------------- https://registry.npmjs.org/
  yarn ------------- https://registry.yarnpkg.com/
  taobao ----------- https://registry.npmmirror.com/
  tencent ---------- https://mirrors.cloud.tencent.com/npm/
```

- command selection registry.

```sh
mto-nrm use taobao
```

## Usage

```
Usage: mto-nrm [options] [command]

A library for easy switching of the npm registry

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  ls              interactive selection registry
  use <string>    command selection registry
  get [string]    get registry
  set <string>    set registry
  home [string]   view registry home
  view [string]   view registry
  help [command]  display help for command
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Matrix-The-One

[npm]: https://www.npmjs.com
