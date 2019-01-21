# InOut.js - I/O JavaScript library

[![CircleCI](https://circleci.com/gh/logiqsystem/inoutjs.svg?style=shield)](https://circleci.com/gh/logiqsystem/inoutjs)
[![codecov](https://codecov.io/gh/logiqsystem/inoutjs/branch/master/graph/badge.svg)](https://codecov.io/gh/logiqsystem/inoutjs)
[![NPM version](https://img.shields.io/npm/v/inoutjs.svg)](https://npmjs.org/package/inoutjs)
[![NPM downloads](https://img.shields.io/npm/dm/inoutjs.svg)](https://npmjs.org/package/inoutjs)
[![devDependency Status](https://img.shields.io/david/dev/logiqsystem/inoutjs.svg)](https://david-dm.org/logiqsystem/inoutjs?type=dev)
[![JS gzip size](https://img.badgesize.io/logiqsystem/inoutjs/master/dist/inout.js?compression=gzip&label=JS+gzip+size)](https://github.com/logiqsystem/inoutjs/blob/master/dist/inout.js)

## Getting started

```
$ npm install inoutjs
```

[or download the latest release](https://github.com/logiqsystem/inoutjs/releases/)

## Usage

Load InOut.js with an ES6 import:

```js
import io from 'inoutjs'
```

InOut.js read and write files by exposing the method `io()`:

```js
document.getElementById('file').onchange = function (e) {
  var file = e.target.files[0];
  var ioWrapper = io(file); // InOut.js file wrapper
};
```

Creating an empty file:

```js
var ioWrapper = io();
```

Creating from blob:

```js
var ioWrapper = io(blob);
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

`type()` get file content type

```js
var type = io(file).type(); // E.g. text/plain
```

`size()` get file size

```js
var size  = io(file).size('MB'); // Options: B, KB, MB, GB
```

### Read file

`readChunk()` read chunk

```js
io(file).readChunk(function (chunk, next) {
  console.log(chunk === undefined ? 'EOF' : chunk);
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
var ioWrapper = io().write('content');
```

`writeLine()` write content to file and break line

```js
var ioWrapper = io()
  .writeLine('content')
  .writeLine(); // Just break line
```

### Save file

`save()` download the file

```js
io(file).save();
io(file).save('foo.xml'); // Override the file name
io(file).save('foo.xml', 'application/xml'); // Override the file name and type
```

`toFile()` get JavaScript File

```js
var file = io().toFile()
```

### Utility functions

`greaterThan()` file size is greather than option

```js
io(file).greaterThan(100, 'KB'); // Options: B, KB, MB, GB
```

`greaterOrEqual()` file size is greather or equal to option

```js
io(file).greaterOrEqual(100, 'KB'); // Options: B, KB, MB, GB
```

`lowerThan()` file size is lower than option

```js
io(file).lowerThan(100, 'KB'); // Options: B, KB, MB, GB
```

`lowerOrEqual()` file size is lower or equal to option

```js
io(file).lowerOrEqual(100, 'KB'); // Options: B, KB, MB, GB
```

## Contact us

If you have any questions, detect a bug or need a new feature, please, fell free to [open a new issue](https://github.com/logiqsystem/inoutjs/issues/new) on GitHub.
