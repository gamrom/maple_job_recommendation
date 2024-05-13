import React, { Dispatch, SetStateAction } from "react";
import { Ttab } from "@/types";

const Tab = ({
  text,
  tabState,
  setTab,
}: {
  text: Ttab;
  tabState: Ttab;

  setTab: Dispatch<SetStateAction<Ttab>>;
}) => {
  const translateKo: {
    [key: string]: string;
  } = {
    search: "직업 검색",
    view: "직업 보기",
    ask: "수정 요청",
  };

  return (
    <div
      className={`w-fit p-[10px] cursor-pointer ${tabState === text ? "text-white rounded-t-[15px] bg-[#00A6DE]" : ""}`}
      onClick={() => tabState !== text && setTab(text)}
    >
      {translateKo[text]}
    </div>
  );
};

const PageTabs = ({
  tab,
  setTab,
}: {
  tab: Ttab;
  setTab: Dispatch<SetStateAction<Ttab>>;
}) => {
  return (
    <div className="border-b border-b-[#00A6DE] flex">
      <Tab text="search" tabState={tab} setTab={setTab} />
      <Tab text="view" tabState={tab} setTab={setTab} />
      <Tab text="ask" tabState={tab} setTab={setTab} />
    </div>
  );
};

export default PageTabs;
