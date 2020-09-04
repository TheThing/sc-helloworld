import http from 'http'
import path from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

export function run(config, db, log, core) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const staticPackage = path.join(__dirname,'../package.json')
  config = JSON.parse(readFileSync(staticPackage))

  const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write(JSON.stringify(config, null, '  '))
    res.end()
  })

  let port = config.managePort || 4000

  server.listen(port, '0.0.0.0', function(err) {
    if (err) {
      log.fatal(err)
      log.event.error('Error starting server: ' + err.message)
      return process.exit(2)
    }
    log.event.info(`Server is listening on ${port} serving package ${staticPackage}`)
    log.info(`Server is listening on ${port} serving package ${staticPackage}`)
  })
}