#!/bin/bash

UUID=`uuidgen`
echo $UUID
echo "docker-compose -f $UUID.yml down"  >> cleanup.sh
echo "docker-compose -f $UUID.yml down"  >> cleanup.sh
echo "rm $UUID.yml" >> cleanup.sh


cp docker-compose-template.yml $UUID.yml
sed -i "s/UUID/$UUID/g" $UUID.yml

docker-compose -f $UUID.yml up -d 

docker-compose -f $UUID.yml logs -f


