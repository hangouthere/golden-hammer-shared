#!/bin/sh


DEBUG="$([ "$1" = "debug" ] && echo '-brk' || echo '')"

# Sets `OUTDIRSTATIC=dist` so all endpoints will have a consistent static folder, otherwise they'll be placed
# under `dist/$SERVICES/*` due to default output settings in the hh-builder script

NODE_ENV=development \
EXTERNALS="./node_modules*" \
FORCEBUILDONLY=1 \
RUNTIMEPLATFORM=node \
FILESRC=$SERVICES/index.service.ts \
DIROUT=dist/$SERVICES \
OUTDIRSTATIC=dist \
SERVICEDIR=dist \
LOGLEVEL=debug \
npx hh-util_nodemon --exec "\
  npx hh-builder && \
  node \
    --inspect${DEBUG}=0.0.0.0:9229 \
    node_modules/moleculer/bin/moleculer-runner.mjs \
    --mask=\"**/*.service.js\" \
"
