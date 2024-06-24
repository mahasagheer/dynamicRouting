import React from "react";
import { counterContext } from "./AuthContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const { t } = useTranslation();
  const [count, increment] = useContext(counterContext);
  return (
    <>
      <button onClick={increment}>
        {t("count")} {count}
      </button>
    </>
  );
};

export default Counter;
