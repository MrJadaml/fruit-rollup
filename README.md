# Live Style Guide

## Setup

```bash
git clone xyz
npm install
npm install -g rollup
npm link
```

move to your luna-web directory and run:

```bash
npm link <STYLE_GUID_APP_NAME>
```

## Usage

<STYLE_GUID_APP_NAME> is already included as a dependency to luna-web, the above _npm-link_
commands simply generated a symlink in your global node_modules pointing at <STYLE_GUID_APP_NAME>
and added a pointer in your local luna-web node_modules.

To use a component from this library in luna-web you just import it like a regular package
with a named export:

```js
import { Foo } from '<STYLE_GUID_APP_NAME>';
```

New components should live in _/src/components/<COMPONENT_NAME>/_. New components should have an
associated test and styles file.

```
|
+--/src
  |
  +--/components
    |
    +--/SomeComponent
      |
      +--SomeComponent.jsx
      |
      +--SomeComponent.test.js
      |
      +--SomeComponent.styles.js
```
