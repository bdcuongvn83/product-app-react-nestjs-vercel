import { useRef } from 'react';

export default function FormUseRef() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef);
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
