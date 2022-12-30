const colors = {
  GREEN: "text-emerald-700",
  BLUE: "text-blue-600",
  ORANGE: "text-orange-700",
  PURPLE: "text-purple-600",
  PINK: "text-pink-600"
};

export default function Label(props) {
  return (
    <span
      className={`inline-block mt-5 text-xs font-medium tracking-wider uppercase ${colors[props.color]}`}>
      {props.children}
    </span >
  );
}