#!/bin/sh

nodemon \
    --verbose -e gh-shared \
    --watch /_triggers \
    --exec "npm i --no-save golden-hammer-shared && npm ls golden-hammer-shared"
