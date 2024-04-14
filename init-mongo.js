// 사용자 생성
db.createUser({
    user: "admin",
    pwd: "password123",
    roles: [
        {
            role: "readWrite",
            db: "mydatabase"
        },
        {
            role: "dbAdmin",
            db: "mydatabase"
        }
    ]
});

// 새 데이터베이스 선택
db = db.getSiblingDB('mydatabase');

// 새 컬렉션 생성
db.createCollection("mycollection");

// 샘플 데이터 삽입
db.mycollection.insert([
    { name: "Sample", value: "This is a sample document." },
    { name: "Sample2", value: "This is another sample document." }
]);