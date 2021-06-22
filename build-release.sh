#!/bin/bash
docker build --no-cache -t hackinglab/alpine-terraform-websocketd:$1.0 -t hackinglab/alpine-terraform-websocketd:$1 -t hackinglab/alpine-terraform-websocketd:latest -f Dockerfile .

docker push hackinglab/alpine-terraform-websocketd
docker push hackinglab/alpine-terraform-websocketd:$1
docker push hackinglab/alpine-terraform-websocketd:$1.0

