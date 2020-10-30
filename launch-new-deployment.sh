#!/bin/bash

UUID=`uuidgen`
echo $UUID
echo "docker-compose -f $UUID.yml down"  >> cleanup.sh
echo "docker-compose -f $UUID.yml down"  >> cleanup.sh
echo "rm $UUID.yml" >> cleanup.sh

echo "https://$UUID.idocker.hacking-lab.com" >> url.txt


cp docker-compose-template.yml $UUID.yml
sed -i "s/UUID/$UUID/g" $UUID.yml

docker-compose -f $UUID.yml up -d
echo ""
echo "=============== HOSTS =================="
cat url.txt
echo ""
echo ""
