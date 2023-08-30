#! /usr/bin/env node
import init from './cli'
import { isLib } from './config'

export * from './core'

!isLib() && init()
