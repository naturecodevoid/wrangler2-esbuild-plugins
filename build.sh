#!/bin/sh

npm i
cd packages/wrangler
npm run build
git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git config --global init.defaultBranch wrangler-build
git init
git add --all
git commit -m "build"
