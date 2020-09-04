#! /bin/bash

docker run --rm --name web-sandbox -v $(pwd):/usr/share/nginx/html:ro -p 8080:80 -d nginx