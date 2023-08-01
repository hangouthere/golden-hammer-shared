#!/bin/sh

nodemon \
    --verbose -e gh-shared \
    --watch /_triggers \
    --exec "npx rimraf ./package-lock.json && npm i --save-peer golden-hammer-shared && npm ls golden-hammer-shared"
