Package.describe({
  name: 'san1dhya:vue-sass',
  version: '0.1.3',
  summary: 'Forked versoion of arkyum:vue-sass.\nAdded sass and scss support for vue components',
  git: 'https://github.com/sani-Alpha/vue-sass',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('ecmascript');
  api.mainModule('vue-sass.js');
});

Npm.depends({
  'node-sass': '6.0.1',
  'meteor-project-path': '0.0.3',
});
