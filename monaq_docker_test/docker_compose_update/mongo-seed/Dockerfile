FROM mongo:latest

COPY dummy.json /dummy.json
CMD mongorestore --host=127.0.0.1 --port=27017 dump
CMD mongoimport --db dummydb --collection dummycollection --drop --file /dummy.json --jsonArray
