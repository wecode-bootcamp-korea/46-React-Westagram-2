const handleButton = ()=>{
  console.log(id)<확인해보기
  fetch('/주소',{
    method:'POST',
  headers: {'Content-Type': 'application/json;charset=utf-8'},
  body :{
    id : ''
    pw:''
    or
    user_id:id.inputId,(backend가 요구하는 이름으로 바꿔준다)
    user_pw:pw.inputPw
  }
})
.then((res)=>res.json())
.then((res)=>console.log(res)) <=꼭 찍어보기!
}
오류 발생 시
1.함수 실행 위치가 올바른가
2.주소가 맞는가
3.메소드가 맞는가
4.헤더 타입미 맞는가
5.바디 키밸류 확인
6.마지막으로 콘솔 리스폰스가 잘 나오는가
7.같은 와이파이인가
