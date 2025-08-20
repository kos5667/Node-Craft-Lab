import { JsonDB } from 'node-json-db';
type DB = 'JsonDB'

export class Accessor {
    public readonly type: DB
    public readonly orm: JsonDB

    constructor(type: DB, orm: JsonDB) {
        this.type = type;
        this.orm = orm;
    }
}
