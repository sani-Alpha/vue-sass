Package.describe({
  name: 'san1dhya:vue-sass',
  version: '0.1.3',
  summary: 'Forked versoion of arkyum:vue-sass.\nAdded sass and scss support for vue components',
  git: 'https://github.com/sani-Alpha/vue-sass',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue-component-sass',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'vue-sass.js',
  ],
  npmDependencies: {
    'node-sass': '6.0.1',
    'meteor-project-path': '0.0.3',
  },
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})
