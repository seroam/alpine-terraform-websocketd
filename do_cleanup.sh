#!/bin/bash

if [ -e cleanup.sh ]; then
	echo "cleanup.sh" available
	chmod +x ./cleanup.sh
	./cleanup.sh
	rm ./cleanup.sh
	rm ./url.txt
else
	echo "cleanup.sh not existing"
	cp cleanup-template.sh cleanup.sh
fi
