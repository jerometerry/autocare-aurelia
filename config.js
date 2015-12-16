System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-bundle": [
      "github:aurelia/history-browser@0.10.0",
      "github:aurelia/history-browser@0.10.0/aurelia-history-browser",
      "npm:core-js@1.2.6",
      "github:aurelia/pal@0.3.0",
      "github:aurelia/history@0.9.0",
      "npm:core-js@1.2.6/client/shim.min",
      "github:aurelia/pal@0.3.0/aurelia-pal",
      "github:aurelia/history@0.9.0/aurelia-history",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "github:aurelia/loader-default@0.12.0",
      "github:aurelia/loader-default@0.12.0/aurelia-loader-default",
      "github:aurelia/loader@0.11.0",
      "github:aurelia/metadata@0.10.1",
      "github:aurelia/loader@0.11.0/aurelia-loader",
      "github:aurelia/metadata@0.10.1/aurelia-metadata",
      "github:aurelia/path@0.11.0",
      "github:aurelia/path@0.11.0/aurelia-path",
      "github:aurelia/templating-router@0.18.0",
      "github:aurelia/templating-router@0.18.0/aurelia-templating-router",
      "github:aurelia/templating-router@0.18.0/route-loader",
      "github:aurelia/templating-router@0.18.0/router-view",
      "github:aurelia/templating-router@0.18.0/route-href",
      "github:aurelia/router@0.14.1",
      "github:aurelia/dependency-injection@0.12.1",
      "github:aurelia/templating@0.17.5",
      "github:aurelia/logging@0.9.0",
      "github:aurelia/dependency-injection@0.12.1/aurelia-dependency-injection",
      "github:aurelia/templating@0.17.5/aurelia-templating",
      "github:aurelia/logging@0.9.0/aurelia-logging",
      "github:aurelia/binding@0.11.4",
      "github:aurelia/task-queue@0.9.0",
      "github:aurelia/binding@0.11.4/aurelia-binding",
      "github:aurelia/task-queue@0.9.0/aurelia-task-queue",
      "github:aurelia/router@0.14.1/aurelia-router",
      "github:aurelia/route-recognizer@0.9.0",
      "github:aurelia/event-aggregator@0.10.0",
      "github:aurelia/route-recognizer@0.9.0/aurelia-route-recognizer",
      "github:aurelia/event-aggregator@0.10.0/aurelia-event-aggregator",
      "github:aurelia/templating-resources@0.17.4",
      "github:aurelia/templating-resources@0.17.4/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.17.4/html-sanitizer",
      "github:aurelia/templating-resources@0.17.4/compose",
      "github:aurelia/templating-resources@0.17.4/if",
      "github:aurelia/templating-resources@0.17.4/with",
      "github:aurelia/templating-resources@0.17.4/show",
      "github:aurelia/templating-resources@0.17.4/replaceable",
      "github:aurelia/templating-resources@0.17.4/focus",
      "github:aurelia/templating-resources@0.17.4/compile-spy",
      "github:aurelia/templating-resources@0.17.4/view-spy",
      "github:aurelia/templating-resources@0.17.4/dynamic-element",
      "github:aurelia/templating-resources@0.17.4/css-resource",
      "github:aurelia/templating-resources@0.17.4/binding-mode-behaviors",
      "github:aurelia/templating-resources@0.17.4/throttle-binding-behavior",
      "github:aurelia/templating-resources@0.17.4/debounce-binding-behavior",
      "github:aurelia/templating-resources@0.17.4/repeat",
      "github:aurelia/templating-resources@0.17.4/sanitize-html",
      "github:aurelia/templating-resources@0.17.4/signal-binding-behavior",
      "github:aurelia/templating-resources@0.17.4/binding-signaler",
      "github:aurelia/templating-resources@0.17.4/update-trigger-binding-behavior",
      "github:aurelia/templating-resources@0.17.4/collection-strategy-locator",
      "github:aurelia/templating-resources@0.17.4/array-collection-strategy",
      "github:aurelia/templating-resources@0.17.4/map-collection-strategy",
      "github:aurelia/templating-resources@0.17.4/number-strategy",
      "github:aurelia/templating-resources@0.17.4/collection-strategy",
      "github:aurelia/templating-binding@0.17.1",
      "github:aurelia/templating-binding@0.17.1/aurelia-templating-binding",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1/aurelia-animator-css",
      "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-templating@1.0.0-beta.1.0.1/aurelia-templating",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-binding@1.0.0-beta.1.0.2/aurelia-binding",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-http-client@1.0.0-beta.1",
      "npm:aurelia-http-client@1.0.0-beta.1/aurelia-http-client",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-pal-browser@1.0.0-beta.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser",
      "welcome",
      "users",
      "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "npm:aurelia-framework@1.0.0-beta.1.0.3/aurelia-framework",
      "github:github/fetch@0.10.1",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
      "github:github/fetch@0.10.1/fetch",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1/aurelia-fetch-client",
      "main",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "child-router",
      "blur-image",
      "app"
    ]
  },
  buildCSS: false,

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
    "aurelia/history-browser": "github:aurelia/history-browser@0.10.0",
    "aurelia/loader-default": "github:aurelia/loader-default@0.12.0",
    "aurelia/templating-binding": "github:aurelia/templating-binding@0.17.1",
    "aurelia/templating-resources": "github:aurelia/templating-resources@0.17.4",
    "aurelia/templating-router": "github:aurelia/templating-router@0.18.0",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:aurelia/binding@0.11.4": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/dependency-injection@0.12.1": {
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/event-aggregator@0.10.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0"
    },
    "github:aurelia/history-browser@0.10.0": {
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/loader-default@0.12.0": {
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/loader@0.11.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-path": "github:aurelia/path@0.11.0"
    },
    "github:aurelia/metadata@0.10.1": {
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/route-recognizer@0.9.0": {
      "aurelia-path": "github:aurelia/path@0.11.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/router@0.14.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/task-queue@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/templating-binding@0.17.1": {
      "aurelia-binding": "github:aurelia/binding@0.11.4",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.5"
    },
    "github:aurelia/templating-resources@0.17.4": {
      "aurelia-binding": "github:aurelia/binding@0.11.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.5",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/templating-router@0.18.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-router": "github:aurelia/router@0.14.1",
      "aurelia-templating": "github:aurelia/templating@0.17.5"
    },
    "github:aurelia/templating@0.17.5": {
      "aurelia-binding": "github:aurelia/binding@0.11.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
