import { JsonDB, Config } from 'node-json-db';

const DEFAULT_PATH = './static'

export async function InitializeDatabase() {
    // TODO: file 별로 domain 분리.
    const config = new Config(`${DEFAULT_PATH}/database`, true, true, "/")
    const db = new JsonDB(config);

    await db.push("/user/name", "Alice", true);
    await db.push("/user/info", { age: 25, city: "Seoul" }, true);
    await db.push("/product/info", { name: 'sosooso', label: "23dfsdf" }, true);
}
