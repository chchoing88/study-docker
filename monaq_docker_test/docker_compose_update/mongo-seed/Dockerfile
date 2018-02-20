FROM mongo:latest

COPY dummy.json /dummy.json
RUN mkdir -p /data/db && mongod --fork --logpath=/tmp/mongodb.log && sleep 20
CMD mongoimport --host mongodb --db dummydb --collection dummycollection --drop --file /dummy.json --jsonArray
