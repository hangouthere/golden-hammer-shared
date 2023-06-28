#!/bin/sh

# NPM Bin Shell Script: Dev
#
# Runs a node instance calling moleculer-runner, using our config

npx hh-util_clean && \
npx ghsvc-dev_run "$@"
