#!/bin/sh

# Golden Hammer Shared Dev Script
# Used to build the gh-shared lib by watching `hh-util` trigger file, and doing a local build

npx hh-util_clean && \
npx concurrently \
    --names 'Link hh-util,Dev' \
    'npx hh-util_triggerWatch' 'npx hh-dev'
