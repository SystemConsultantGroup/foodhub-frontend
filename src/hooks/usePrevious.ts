import { useEffect, useRef } from "react";

// 바로 직전 상태의 state 값을 반환하는 hook
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
