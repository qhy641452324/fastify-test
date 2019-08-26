module.exports = {
  cache_file_path: process.cwd() + '/cache/', //落地缓存文件夹
  log_file_path: process.cwd() + '/log/', //日志文件夹
  development: {},
  zptest: {},
  production: {},
  getEnvParam: function (name) {
    if (this[process.env.NODE_ENV]) {
      return this[process.env.NODE_ENV][name]
    }
    return this.production[name]
  }
}


