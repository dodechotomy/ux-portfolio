export function tabIndex(disabled) {
  return {
    tabIndex: disabled ?
      "-1" : "0"
  };
}
