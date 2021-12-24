# @townland/eventer
Townland custom event emitter named ```eventer``` and you can run this package in browsers.

## Table of Contents
- [Stackable emit events](#stackable-emit-events)
- [Installation](#installation)
    - [With package manager](#with-package-manager)
        - [npm](#npm)
        - [yarn](#yarn)
    - [CDN](#cdn)
- [Functions](#functions)
    - [has](#has)
    - [isStacked](#isstacked)
    - [on](#on)
    - [once](#once)
    - [remove](#remove)
- [Example](#example)
- [Change log](#change-log)

## Stackable emit events
Emit an event with no event listener. After making the listener, the last emit will be called.

## Installation
If you have worked with NPM/NodeJS so far, you know how to install this package. Of course, you can also run this package in browsers.

### With package manager
I know ```npm``` and ```yarn``` to manage nodejs packages.

#### npm
```
npm i @townland/eventer
```

#### yarn
```
yarn add @townland/eventer
```

### CDN
Do you know ```jsDeliver``` ?
```html
<script src="https://cdn.jsdelivr.net/npm/@townland/eventer@latest/dist/index.min.js"></script>
```

## Functions
### has
Check event name exist or not.

```typescript
eventer.has('<EVENT-NAME>') 
```

### isStacked
Check event name stacked and wait for listener.

```typescript
eventer.isStacked('<EVENT-NAME>')
```

### on
Listen to an event.

```typescript
function callback() {
    /// your event callback
}

eventer.on('<EVENT-NAME>', callback)
```

### once
Listen to an event one time.

```typescript
function callback() {
    /// your event callback
}

eventer.once('<EVENT-NAME>', callback)
```

### remove
Yes! You can remove created listenner.

```typescript
let event = eventer.on('<EVENT-NAME>', callback);

event.remove()
```

## Example
```typescript
import { Eventer } from '@townland/eventer';

let eventer = new Eventer();

eventer.once('pong', (params: any[]) => {
    /*
     *    This callback will call one time
     */
    console.log('ping')
})

eventer.on('ping', (params: any[]) => {
    /*
     * This is event callback
     */
    console.log('pong')
    eventer.emit('pong')
});


eventer.emit('ping') // <= call event callback
```

## Change log
You can read changes right [here](./CHANGELOG.md).