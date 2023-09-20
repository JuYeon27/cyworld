const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
//   undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].number + " " + fruits[i].title);
}
//   VM1672:2 1 레드향
//   VM1672:2 2 샤인머스켓
//   VM1672:2 3 산청딸기
//   VM1672:2 4 한라봉
//   VM1672:2 5 사과
//   VM1672:2 6 애플망고
//   VM1672:2 7 딸기
//   VM1672:2 8 천혜향
//   VM1672:2 9 과일선물세트
//   VM1672:2 10 귤
//   undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i].number} ${fruits[i].title}`);
}
//   VM1676:2 1 레드향
//   VM1676:2 2 샤인머스켓
//   VM1676:2 3 산청딸기
//   VM1676:2 4 한라봉
//   VM1676:2 5 사과
//   VM1676:2 6 애플망고
//   VM1676:2 7 딸기
//   VM1676:2 8 천혜향
//   VM1676:2 9 과일선물세트
//   VM1676:2 10 귤
//   undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title} 입니다`);
}
//   VM1680:2 과일 차트 1위는 레드향 입니다
//   VM1680:2 과일 차트 2위는 샤인머스켓 입니다
//   VM1680:2 과일 차트 3위는 산청딸기 입니다
//   VM1680:2 과일 차트 4위는 한라봉 입니다
//   VM1680:2 과일 차트 5위는 사과 입니다
//   VM1680:2 과일 차트 6위는 애플망고 입니다
//   VM1680:2 과일 차트 7위는 딸기 입니다
//   VM1680:2 과일 차트 8위는 천혜향 입니다
//   VM1680:2 과일 차트 9위는 과일선물세트 입니다
//   VM1680:2 과일 차트 10위는 귤 입니다
