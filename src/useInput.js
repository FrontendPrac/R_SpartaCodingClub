import { useRef, useState } from "react";

export function useInput(initialText) {
  const [text, setText] = useState(initialText);
  const inputRef = useRef();

  return [text, setText, inputRef];
}
