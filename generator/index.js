module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    repository: {
      "type": "git",
      "url": "git+https://github.com/qianfan123/fant-cli"
    },
    dependencies: {
      "axios": "^0.18.0",
      "fant3": "^0.3.6",
      "register-service-worker": "^1.0.0",
      "vue": "^2.5.17",
      "vue-class-component": "^6.0.0",
      "vue-i18n": "^8.3.0",
      "vue-property-decorator": "^7.0.0",
      "vue-quill-editor": "^3.0.6",
      "vue-router": "^3.0.1",
      "vuex": "^3.0.1",
      "vuex-class": "^0.3.1"
    },
    devDependencies: {
      "@types/chai": "^4.1.0",
      "@types/mocha": "^5.2.4",
      "@vue/cli-plugin-babel": "^3.0.5",
      "@vue/cli-plugin-e2e-nightwatch": "^3.0.5",
      "@vue/cli-plugin-pwa": "^3.0.5",
      "@vue/cli-plugin-typescript": "^3.0.5",
      "@vue/cli-plugin-unit-mocha": "^3.0.5",
      "@vue/cli-service": "^3.0.5",
      "@vue/test-utils": "^1.0.0-beta.20",
      "chai": "^4.1.2",
      "node-sass": "^4.13.1",
      "sass-loader": "^7.0.1",
      "typescript": "^3.0.0",
      "vue-template-compiler": "^2.5.17"
    },
    scripts: {
      "dev": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "test:e2e": "vue-cli-service test:e2e",
      "test:unit": "vue-cli-service test:unit"
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