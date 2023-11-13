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

- 交互式选取registry

```sh
mto-nrm ls

> npm --------------- https://registry.npmjs.org/
  yarn -------------- https://registry.yarnpkg.com/
  taobao ------------ https://registry.npmmirror.com/
  tencent ----------- https://mirrors.cloud.tencent.com/npm/
```

- 命令式设置registry

```sh
mto-nrm use taobao
```

- 使用yarn设置registry

```sh
mto-nrm use taobao -e yarn
```

## 使用

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

- 获取registry

```sh
mto-nrm get
```

- 获取指定registry

```sh
mto-nrm get taobao
```

### set

- 设置registry

```sh
mto-nrm set https://registry.npmmirror.com/
```

### home

- 获取home

```sh
mto-nrm home
```

- 获取指定home

```sh
mto-nrm home taobao
```

### view

- 查看registry

```sh
mto-nrm view
```

- 查看指定registry

```sh
mto-nrm view taobao
```

### add

- 添加registry

```sh
mto-nrm add cnpm http://r.cnpmjs.org/ http://r.cnpmjs.org/
```

### update

- 更新registry

```sh
mto-nrm update cnpm -u=http://r.cnpmjs.org/ -h=http://r.cnpmjs.org/
```

### del

- 删除registry

```sh
mto-nrm del cnpm
```

### clear

- 清空registry

```sh
mto-nrm clear
```

### test

- 测试registry

```sh
mto-nrm test
```

- 测试指定registry

```sh
mto-nrm test taobao
```

### config

- 获取配置文件路径

```sh
mto-nrm config
```

## Node使用

```ts
import mtonrm from 'mto-nrm'

mtonrm.use('taobao')
```

## 开源许可证

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Matrix-The-One

[npm]: https://www.npmjs.com
