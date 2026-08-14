const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const vitePrerender = require('vite-plugin-prerender')
const fs = require('fs')
const path = require('path')

const systemChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

module.exports = defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve('dist'),
      routes: ['/'],
      renderer: new vitePrerender.PuppeteerRenderer({
        executablePath:
          process.platform === 'darwin' && fs.existsSync(systemChromePath)
            ? systemChromePath
            : undefined,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        skipThirdPartyRequests: true,
      }),
    }),
  ],
})