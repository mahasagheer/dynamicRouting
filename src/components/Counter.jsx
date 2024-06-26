import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "../action/index";

const Counter = () => {
  const mystate = useSelector((state) => state.Increment);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <>
      <button onClick={() => dispatch(Increment())}>
        {t("count")} {mystate}
      </button>
    </>
  );
};

export default Counter;
