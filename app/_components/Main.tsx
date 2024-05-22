"use client";

import PageTabs from "./PageTabs";
import Search from "@/components/Search";
import { useState } from "react";
import { Ttab, Tjob } from "@/types";

export const Main = ({ prismaData }: { prismaData: any }) => {
  const [tab, setTab] = useState<Ttab>("search");

  return (
    <div>
      <div className="mt-[100px] flex justify-center items-center text-3xl">
        메이플 직업 검색기
      </div>
      <PageTabs tab={tab} setTab={setTab} />

      {tab === "search" && <Search data={prismaData} />}
    </div>
  );
};
