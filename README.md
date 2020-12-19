# esbuild-hot-reload

This is a minimal repo that aims to demonstrate how to esbuild + TypeScript + hot reload. Note that hot reloading is not the same thing as hot module replacement, otherwise known as HMR. Hot reload simply refreshes your local server whereas HMR dynamically refreshes your local server’s modules. HMR is great when it works but poses significant complexity overhead whereas hot reloading is simpler and easier to reason about.

## How to use this repo

1. Run `yarn` (or your favorite package manager) to initialize dependencies
1. Run `node serve.js` to kickstart a local server, pointed at `public`
1. Update `src/index.ts` and save changes to hot reload the local server

## Inspired by

This repo is inspired by [@unki2aut’s](https://github.com/evanw/esbuild/issues/21#issuecomment-744183916) [MVP demo](https://gist.github.com/unki2aut/4ac81c33be2e8f121e80a26eba1735d7).
