#!/bin/bash

# Build the Docker image
docker build -t my-app .

# Run the Docker container
docker run --rm -p 3000:3000 my-app
