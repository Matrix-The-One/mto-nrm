<p align="center">
  中文 | <a href="./README.en-US.md">English</a> 
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/v/mto-nrm.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/mto-nrm?minimal=true"><img src="https://img.shields.io/npm/dm/mto-nrm.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/l/mto-nrm.svg?sanitize=true" alt="License"></a>
</p>

# mto-nrm

一个便于切换注册表的库

## 安装

```sh
npm install mto-nrm -g
```

## 示例

- 交互式选取registry。

```sh
mto-nrm ls

> npm --------------- https://registry.npmjs.org/
  yarn -------------- https://registry.yarnpkg.com/
  taobao ------------ https://registry.npmmirror.com/
  tencent ----------- https://mirrors.cloud.tencent.com/npm/
```

- 命令式设置registry。

```sh
mto-nrm use taobao
```

- 使用yarn。

```sh
mto-nrm use taobao -e yarn
```

## 使用

```
Usage: mto-nrm [options] [command]

A library for easy switching of the npm registry

Options:
  -V, --version            output the version number
  -h, --help               display help for command

Commands:
  ls [options]             interactive selection registry
  use [options] <string>   command selection registry
  get [options] [string]   get registry
  set [options] <string>   set registry
  home [options] [string]  view registry home
  view [options] [string]  view registry
  add <name> <url> [home]  add registry
  update [options] <name>  update registry
  del <name>               delete registry
  clear                    clear registry
  help [command]           display help for command
```

## 开源许可证

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Matrix-The-One

[npm]: https://www.npmjs.com
