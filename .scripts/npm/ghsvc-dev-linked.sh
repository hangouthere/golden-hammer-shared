#!/bin/sh

# NPM Bin Shell Script: Dev Linked
#
# Watches hh-util and gh-shared for trigger updates and installs accordingly
# Runs a node instance calling moleculer-runner, using our config.

NODE_ENV=development \
  npm i && \
  npx hh-util_clean && \
npx concurrently \
  --names 'Link hh-util,Link gh-shared,Dev' \
  'npx hh-util_triggerWatch' \
  'npx ghsvc-util_triggerWatch' \
  "npx ghsvc-dev_run $@"