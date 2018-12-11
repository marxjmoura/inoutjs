# InOut.js - I/O JavaScript library

[![CircleCI](https://circleci.com/gh/marxjmoura/inoutjs.svg?style=shield)](https://circleci.com/gh/marxjmoura/inoutjs)
[![codecov](https://codecov.io/gh/marxjmoura/inoutjs/branch/master/graph/badge.svg)](https://codecov.io/gh/marxjmoura/inoutjs)
[![NPM version](https://img.shields.io/npm/v/inoutjs.svg)](https://npmjs.org/package/inoutjs)
[![NPM downloads](https://img.shields.io/npm/dm/inoutjs.svg)](https://npmjs.org/package/inoutjs)
[![devDependency Status](https://img.shields.io/david/dev/marxjmoura/inoutjs.svg)](https://david-dm.org/marxjmoura/inoutjs?type=dev)
[![JS gzip size](https://img.badgesize.io/marxjmoura/inoutjs/master/dist/inout.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/marxjmoura/inoutjs/blob/master/dist/inout.min.js)

## Getting started

```
$ npm install inoutjs
```

[or download the latest release](https://github.com/marxjmoura/inoutjs/releases/)

## Usage

Load InOut.js with an ES6 import:

```js
import io from 'inoutjs'
```

InOut.js read and write files by exposing the method `io()`.

```js
document.getElementById('file').onchange = function (e) {
  var file = e.target.files[0];

  io(file); // InOut.js file wrapper
};
```

### File info

`fullName()` get file name including extension

```js
var fullName = io(file).fullName(); // E.g. foo.txt
```

`name()` get file name without extension

```js
var name = io(file).name(); // E.g. foo
```

`ext()` get file extention

```js
var extension = io(file).ext(); // E.g. txt
```

`contentType()` get file content type

```js
var contentType = io(file).contentType(); // E.g. text/plain
```

`size()` get file size

```js
var size  = io(file).size('MB'); // Options: B, KB, MB, GB
```

### Read file

`readChunk()` read chunk

```js
io(file).readChunk(function (chunk, next) {
  console.log(chunk);
  next(); // Read next chunk
});
```

`readLine()` read line by line

```js
io(file).readLine(function (line, next) {
  console.log(line === undefined ? 'EOF' : line);
  next(); // Read next line
});
```

### Write to file

`write()` write content to file

```js
io({ fullName: 'foo.txt', contenType: 'text/plain' }).write('full content');
```

`writeLine()` write line to file

```js
io({ fullName: 'foo.txt', contenType: 'text/plain' }).writeLine('content');
```

`save()` download the file

```js
io({ fullName: 'foo.txt', contenType: 'text/plain' }).save();
```

### Utility functions

`greaterThan()` file size is greather than option

```js
io(file).greaterThan(100, 'KB'); // Options: B, KB, MB, GB
```

`greaterThan()` file size is greather or equal to option

```js
io(file).greaterOrEqual(100, 'KB'); // Options: B, KB, MB, GB
```

`greaterThan()` file size is lower than option

```js
io(file).lowerThan(100, 'KB'); // Options: B, KB, MB, GB
```

`greaterThan()` file size is lower or equal to option

```js
io(file).lowerOrEqual(100, 'KB'); // Options: B, KB, MB, GB
```
