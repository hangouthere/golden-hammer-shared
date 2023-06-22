#!/bin/sh

nodemon \
    --verbose -e gh-shared \
    --watch /_triggers \
    --exec "npm i -D golden-hammer-shared && npm ls golden-hammer-shared"
