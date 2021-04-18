#!/bin/zsh
echo "CWD: `pwd`"

echo "deleting global node modules"
rm -Rf node_modules

echo "deleting yarn locks"
rm -f yarn.lock
