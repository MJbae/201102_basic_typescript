import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  // state 및 useRef 정의
  const [FirstRandomNumber, setFirstRandomNumber] = useState(
    Math.ceil(Math.random() * 9)
  );
  const [SecondRandomNumber, setSecondRandomNumber] = useState(
    Math.ceil(Math.random() * 9)
  );
  const [AnswerNumber, setAnswerNumber] = useState(
    FirstRandomNumber * SecondRandomNumber
  );
  const [InputValue, setInputValue] = useState("");
  const [ShowAnswer, setShowAnswer] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  // onSubmitForm 함수 정의
  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputEl.current;

    // 1. 사용자 입력값과 구구단 생성값 비교
    // 1-1. 정답일 경우, ShowAnswer State 저장 / 새로운 구구단 값 생성 / 사용자 입력값 초기화
    if (parseInt(InputValue) === AnswerNumber) {
      setShowAnswer("정답");
      setInputValue("");
      // input elemnet가 존재한다면
      if (input) {
        input.focus();
      }
    }
    // 1-2. 오답일 경우, ShowAnswer State 저장 / 사용자 입력값 초기화
    else {
      setShowAnswer("오답");
      setInputValue("");
      if (input) {
        input.focus();
      }
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        {FirstRandomNumber} X {SecondRandomNumber} = ??
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputEl}
            onChange={onChangeInput}
            type="number"
            value={InputValue}
            placeholder="정답을 입력하세요"
          />
          <input type="button" value="입력" />
        </form>
        {ShowAnswer}
      </div>
    </>
  );
};

export default GuGuDan;
