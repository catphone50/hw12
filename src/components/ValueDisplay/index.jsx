import { useEffect, useRef, useState } from "react";

function ValueDisplay({ value, previousValue }) {
  const previousValueRef = useRef(null);

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current value: {value}</p>
      <p>Previous value: {previousValueRef.current}</p>
      <p>Previous value submit: {previousValue}</p>
    </div>
  );
}
export default ValueDisplay;
