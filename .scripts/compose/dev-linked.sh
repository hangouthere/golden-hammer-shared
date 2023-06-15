#!/bin/sh

NODE_ENV=development \
  npm i && \
  npx hh-util_clean && \
npx concurrently \
    --names 'Link hh-util,Dev' \
    'npx hh-util_triggerWatch' 'npx hh-dev'
