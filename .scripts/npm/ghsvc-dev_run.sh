#!/bin/sh

DEBUG="$([ "$1" = "debug" ] && echo '-brk' || echo '')"

# SERVICE_NAME=$SERVICES
#
# NODE_ENV=development \
# EXTERNALS="./node_modules*" \
# FORCEBUILDONLY=1 \
# RUNTIMEPLATFORM=node \
# DIRSRC=./services \
# FILESRC=$SERVICE_NAME/index.service.mjs \
# SERVICES=$SERVICE_NAME \ # For molecularjs
#   npx hh-util_nodemon --exec "npx gh-util_fullBuild && npx ghsvc-dev_run"

node \
  --inspect${DEBUG}=0.0.0.0:9229 \
  node_modules/moleculer/bin/moleculer-runner.mjs \
  --config moleculer.config.mjs \
  #--config dist/moleculer.config.mjs \
  --hot
