#!/bin/bash
docker build --no-cache -t hackinglab/alpine-terraform-websocketd:3.2.0 -t hackinglab/alpine-terraform-websocketd:3.2 -t hackinglab/alpine-terraform-websocketd:latest -f Dockerfile .
