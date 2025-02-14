#!/bin/sh

npm i
cd packages/wrangler
cat <<< $(jq '.version += "-esbuild-plugins"' package.json) > package.json
npm run build
git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --global user.name "github-actions[bot]"
git config --global init.defaultBranch wrangler-build
git init
git add --all
git commit -m "build"
