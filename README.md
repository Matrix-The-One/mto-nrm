<p align="center">
  中文 | <a href="./README.en-US.md">English</a> 
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/v/mto-nrm.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/mto-nrm?minimal=true"><img src="https://img.shields.io/npm/dm/mto-nrm.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/mto-nrm"><img src="https://img.shields.io/npm/l/mto-nrm.svg?sanitize=true" alt="License"></a>
</p>

# mto-nrm

一个便于切换 npm 注册表的库

## 安装

```shell
npm install mto-nrm -g
```

## 示例

- 交互式选取registry。

```shell
$ mto-nrm ls

> npm -------------- https://registry.npmjs.org/
  yarn ------------- https://registry.yarnpkg.com/
  taobao ----------- https://registry.npmmirror.com/
  tencent ---------- https://mirrors.cloud.tencent.com/npm/
```

- 命令式设置registry。

```shell
$ mto-nrm use taobao
```

## 使用

```shell
Usage: mto-nrm [options] [command]

A library for easy switching of the npm registry

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  ls              interactive selection registry
  use <string>    command selection registry
  get             get registry
  set <string>    set registry
  home <string>   view registry home
  view <string>   view registry
  help [command]  display help for command
```

## 开源许可证

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Matrix-The-One

[npm]: https://www.npmjs.com
