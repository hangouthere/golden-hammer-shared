#!/bin/sh

# NPM Bin Shell Script: Dev Linked
#
# Watches hh-util and gh-shared for trigger updates and installs accordingly
# Runs a node instance calling moleculer-runner, using our config.

npx hh-util_clean && \
npx concurrently \
  --names 'Link hh-util,Link gh-shared,Dev' \
  'npx hh-util_triggerWatch -D' \
  'npx ghsvc-util_triggerWatch' \
  "npx ghsvc-dev_run $*"
