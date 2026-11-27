#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const projectRoot = path.join(__dirname, '..')
const htmlPaths = [
  path.join(projectRoot, 'src', 'browser.html'),
  path.join(projectRoot, 'dist-free', 'browser.html')
]
let totalScripts = 0
let failures = 0

for (const htmlPath of htmlPaths) {
  if (!fs.existsSync(htmlPath)) {
    console.error(`Missing browser HTML: ${htmlPath}`)
    failures += 1
    continue
  }

  const html = fs.readFileSync(htmlPath, 'utf8')
  const scriptTag = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script\s*>/gi
  let match
  let count = 0

  while ((match = scriptTag.exec(html))) {
    count += 1
    totalScripts += 1
    const line = html.slice(0, match.index).split('\n').length
    try {
      new vm.Script(match[1], { filename: `${htmlPath}:inline-script-${count}` })
      console.log(`${path.relative(projectRoot, htmlPath)} script ${count} (line ${line}): syntax OK`)
    } catch (error) {
      failures += 1
      console.error(`${path.relative(projectRoot, htmlPath)} script ${count} (line ${line}): ${error.message}`)
    }
  }

  if (count === 0) {
    console.error(`No inline scripts found in ${htmlPath}`)
    failures += 1
  }
}

if (failures) {
  process.exitCode = 1
} else {
  console.log(`Checked ${totalScripts} inline scripts across ${htmlPaths.length} browser files.`)
}
