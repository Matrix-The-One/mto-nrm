#! /usr/bin/env node
import init from './cli'
import { isLib } from './utils'

export * from './core'

!isLib && init()
