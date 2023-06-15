#!/bin/sh

# Publish the lib to the targeted registry

docker exec -it golden-hammer-shared npx hh-publish gh-shared
