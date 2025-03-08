#!/bin/sh
npm run precommit
if git diff --name-only | grep -q '^\.eslintcache$'; then
  echo ".eslintcache changed. Staging it..."
  git add .eslintcache
fi

git update-index --again
