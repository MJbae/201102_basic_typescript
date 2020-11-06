import * as React from 'react';
import { useState, useCallback, useRef } from 'react';

const WordRelay = () => {
  let answerNumber: number = 12
  
  // state 및 useRef 정의 
  const [SuggestedWord, setSuggestedWord] = useState("배만진")
  const [InputValue, setInputValue] = useState("")
  const [ShowAnswer, setShowAnswer] = useState("")
  const inputEl = useRef<HTMLInputElement>(null);

  // onSubmitForm 함수 정의
  const onSubmitForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      const input = inputEl.current;
        
      // 1. SuggestedWord의 마지막 단어와 사용자 입력값의 첫번째 단어 비교
      // 1-1. 같을 경우, ShowAnswer State 저장 / 사용자 입력값을 SuggestedWord에 저장 / 사용자 입력값 초기화
      if (SuggestedWord[SuggestedWord.length - 1] === InputValue[0]) {
        setShowAnswer("정답")
        setSuggestedWord(InputValue)
        setInputValue("")
        // input elemnet가 존재한다면
        if (input) {
          input.focus();
        }
      }
      // 1-2. 다를 경우, ShowAnswer State 저장 / 사용자 입력값 초기화
      else {
        setShowAnswer("오답")
        setInputValue("")
        if (input) {
          input.focus();
        }
      }
    }, [SuggestedWord, InputValue])
  
  

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }, [])
  
  

  return (
    <>
    <div>{SuggestedWord}
    <form onSubmit={onSubmitForm}>
      <input ref={inputEl} onChange={onChangeInput} type="text" value={InputValue} placeholder="정답을 입력하세요" />
      <input type="button" value="입력"/>
    </form>
      {ShowAnswer}
    </div>
    </>
  );
};

export default WordRelay;
