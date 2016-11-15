# js-react-starting-kit
Starting a project with Hugo, React, Redux, Webpack, Babel and SASS

- [Hugo](https://gohugo.io/overview/introduction) is a Go general-purpose website framework that works as a static site generator.
- [React](https://facebook.github.io/react) is a JavaScript library providing a view for data rendered as HTML.
- [Redux](http://redux.js.org) Redux is a predictable state container for JavaScript apps.
- [Webpack](https://webpack.github.io) is a JavaScript module bundler that generates static assets representing your module dependencies.
- [Babel](https://babeljs.io) Babel is a Javascript ECMAScript 6 to ECMAScript 5 compiler.
- [SASS](http://sass-lang.com/) is a scripting language that is interpreted into CSS

Is a crazy idea to join Hugo and Webpack?
Lets see..

Install
===
You should already have [hugo installed](https://gohugo.io/overview/installing/) in your machine;<br />
You need also [npm installed](https://docs.npmjs.com/getting-started/installing-node) ; then...
```
npm install -g webpack-dev-server #for development purposes
npm install -g webpack
npm install
```

Build it:
===
```
npm run build
```

Development server:
===
At this point, things are different if you are focused in Hugo, or in Webpack:
* `hugo server` will serve its stuff from /public folder, so everything should be there: js bundles too
* `webpack-dev-server`, will serve the bundles from memory, so no data is writen into /public 

Accessing the site through hugo:
---
Using `hugo server`, there will be live reload when hugo files changes;<br />
You should build the bundles using `webpack -w` (because using `webpack-dev-server` bundles are served from memory)
```
npm run hugo-server
npm run webpack-watcher
```
visit: [http://localhost:8181]()

Accessing the site through webpack:
---
using `webpack-dev-server` there will be live reload when webpack bundles changes;
```
npm run hugo-server
npm run webpack-server
```
visit: [http://localhost:8282]() or [http://localhost:8282/webpack-dev-server/]()