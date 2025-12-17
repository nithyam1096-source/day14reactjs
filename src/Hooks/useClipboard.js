const useClipboard = () => {
  const copy = (text) => navigator.clipboard.writeText(text);
  return { copy };
};

export default useClipboard;