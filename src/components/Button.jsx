export default function Button({ children, onPress }) {
  return (
    <button onClick={onPress} variant>
      {children}
    </button>
  );
}
