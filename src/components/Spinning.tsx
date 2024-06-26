import { CSpinner } from "@coreui/react";
import { useSelector } from "react-redux";

const Spinning = () => {
  const mystate = useSelector((state) => state.Spinner);
  return <>{mystate ? <CSpinner color="warning" variant="grow" /> : null}</>;
};

export default Spinning;
