// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https:/www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `
//* match
// const regexp = new RegExp('the', 'gi');
// console.log(str.match(regexp));

// const regexp = /the/gi;
// console.log(str.match(regexp));

//* test
// const regexp = /fox/gi;
// console.log(regexp.test(str)); // true

//* repleace
// console.log(str.replace(regexp, 'AAA'));
// str = (str.replace(regexp, 'AAA'));
// console.log(str);

//* 플래그(옵션) flag 'm'
// const regexp = /the/g;
// console.log(str.match(regexp));
// console.log(str.match(/\./gim));

// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https:/www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// //* 패턴
// //* $
// console.log(
//   str.match(/d$/gm)
// );
// //* ^
// console.log(
//   str.match(/^t/gim)
// );
// //* .
// console.log(
//   str.match(/h..p/g)
// );
// //* |
// console.log(
//   str.match(/fox|dog/) //* 먼저 찾아지는 것이 반환되기 때문에 dog|fox로 해도 결과는 같다.
// );

// //* ?
// console.log(
//   str.match(/https?/g)  //* s가 있거나 없거나 일치값 
// );
// //* {n}
// console.log(
//   str.match(/d{2}/g)
// );
// //* {n, m}
// console.log(
//   str.match(/d{2,3}/g)
// );
// //* \w - 숫자를 포함한 알파벳을 의미
// console.log(
//   str.match(/\w{2,3}/g)
// );
// //* \b - 숫자를 포함한 알파벳이 아닌 경계를 만들어준다.
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// );

// console.log(
//   str.match(/[fox]/g)
// );

// console.log(
//   str.match(/[0-9]{1,}/g)
// );

// console.log(
//   str.match(/[가-힣]{1,}/g)
// );

// console.log(
//   str.match(/\w/g)
// );
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// );

// console.log(
//   str.match(/\b/g)
// );

// console.log(
//   str.match(/\d/g)
// );
// console.log(
//   str.match(/\d{1,}/g)
// );

// console.log(
//   str.match(/\s/g)
// );


let str = `
010-1234-5678
thesecon@gmail.com
https:/www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g) //* [ 'thesecon' ]
)

console.log(
  str.match(/(?<=@).{1,}/g) //* [ 'gmail.com' ]
)
