#!/bin/sh

# NPM Bin Shell Script: Dev
#
# Runs a node instance calling moleculer-runner, using our config

NODE_ENV=development \
  npm i && \
  npx hh-util_clean && \
npx ghsvc-dev_run $@