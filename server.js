const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS 설정
app.use(cors());

// JSON 요청을 처리하기 위한 미들웨어
app.use(express.json());

// 샘플 과일 데이터
let fruits = [
  { id: 1, name: '사과', price: 3000, image: 'apple.jpg' },
  { id: 2, name: '바나나', price: 2000, image: 'banana.jpg' },
  { id: 3, name: '오렌지', price: 4000, image: 'orange.jpg' }
];

// 과일 목록을 가져오는 API
app.get('/api/fruits', (req, res) => {
  res.json(fruits);
});

// 새로운 과일 추가 API
app.post('/api/fruits', (req, res) => {
  const newFruit = req.body;
  newFruit.id = fruits.length + 1;
  fruits.push(newFruit);
  res.status(201).json(newFruit);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});