var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').BSON,
    assert = require('assert');


module.exports = {
    db: new Db('test', new Server('localhost', 27017),{safe:true})
//    _db2: new Db('ngstools', new Server('localhost', 27020),{safe:true}),
//    db3: new Db('tumor', new Server('localhost', 27020),{safe:true})
};


