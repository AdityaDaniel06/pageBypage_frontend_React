import { useSelector } from "react-redux";

function Username() {
  // useSelector = to access a state from slice
  const uName = useSelector((state) => state.user.username);
  if (!uName) return null;
  return <div className="hidden text-sm font-semibold md:block">{uName}</div>;
}

export default Username;
