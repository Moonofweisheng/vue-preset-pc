module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
    },
    devDependencies: {
    },
    scripts: {
      'dev': 'vue-cli-service serve',
      'build:testing': 'vue-cli-service build --mode testing',
      'build:staging': 'vue-cli-service build --mode staging',
      'build:production': 'vue-cli-service build',
    },
    config: {
    },
    gitHooks: {
    }
  })

  if (options.elementUI) {
    api.extendPackage({
      devDependencies: {
        "element-ui": "^2.13.0"
      }
    })
  }
}