"use client";

import Label from "@/components/Label";
import ButtonGroup from "@/components/ButtonGroup";
import { useState } from "react";
import CharCard from "@/components/CharCard";
import { JOB_NAMES } from "../constants";

const Search = () => {
  const buttonProperty = {
    직업군: ["전사", "마법사", "궁수", "도적", "해적", "복합"],
    "자력 풀공속": ["가능", "불가능"],
    "보조무기 강화": ["가능", "불가능"],
    주스탯: ["STR", "DEX", "INT", "LUK"],
    부스탯: ["STR", "DEX", "INT", "LUK"],
    속성: ["물리", "불", "얼음", "전기", "독", "성", "암흑"],
    "추가 타격": ["가능", "불가능"],
    풀스탠스: ["가능", "불가능"],
    "슈퍼 스탠스": ["가능", "불가능"],
    MP가드: ["가능", "불가능"],
    가드: ["가능", "불가능"],
    점프: ["더블", "트리플"],
    "공중 하강": ["가능", "불가능"],
    밀격: ["가능", "불가능"],
    "버프 불능": ["가능", "불가능"],
    "버프 해제": ["가능", "불가능"],
    바인드: ["보유", "미보유"],
    무적: ["보유", "미보유"],
    "부활 및 사망 방지": ["보유", "미보유"],
  };

  return (
    <div className="grid grid-cols-1 mt-8 page_layout_style md:grid-cols-2">
      <div className="flex flex-wrap justify-center order-last mt-3 md:order-first">
        {JOB_NAMES.map((jobName, index) => {
          return <CharCard key={`job_card_${index}`} name={jobName} />;
        })}
      </div>
      <div className="flex flex-wrap gap-[10px] content-start">
        <div className="flex flex-col">
          <Label text="직업군" />
          <ButtonGroup name="직업군" properties={buttonProperty["직업군"]} />
        </div>

        <div className="flex flex-col">
          <Label text="자력 풀공속" tooltipText="주 선택 무기 기준" />
          <ButtonGroup
            name="자력 풀공속"
            properties={buttonProperty["자력 풀공속"]}
          />
        </div>

        <div>
          <Label text="보조무기 강화" />
          <ButtonGroup
            name="보조무기 강화"
            properties={buttonProperty["보조무기 강화"]}
          />
        </div>
        <div>
          <Label text="주스탯" />
          <ButtonGroup name="주스탯" properties={buttonProperty["주스탯"]} />
        </div>
        <div>
          <Label text="부스탯" />
          <ButtonGroup name="부스탯" properties={buttonProperty["부스탯"]} />
        </div>
        <div>
          <Label text="속성" />
          <ButtonGroup name="속성" properties={buttonProperty["속성"]} />
        </div>
        <div>
          <Label
            text="추가 타격"
            tooltipText="쉐도우 파트너 등, 최종 데미지 효율에 영향을 받지 않는 데미지 증가"
          />
          <ButtonGroup
            name="추가 타격"
            properties={buttonProperty["추가 타격"]}
          />
        </div>

        <div>
          <Label text="슈퍼 스탠스" />
          <ButtonGroup
            name="슈퍼 스탠스"
            properties={buttonProperty["슈퍼 스탠스"]}
          />
        </div>

        <div>
          <Label text="가드" tooltipText="상태이상, 피격 회피 등의 가드 유무" />
          <ButtonGroup name="가드" properties={buttonProperty["가드"]} />
        </div>
        <div>
          <Label text="점프" tooltipText="기본 점프 스킬 기준" />
          <ButtonGroup name="점프" properties={buttonProperty["점프"]} />
        </div>
        <div>
          <Label
            text="공중 하강"
            tooltipText="텔레포트, 거스트다이브, 버스트 스탭 등"
          />
          <ButtonGroup
            name="공중 하강"
            properties={buttonProperty["공중 하강"]}
          />
        </div>

        <div>
          <Label text="밀격/넉백" tooltipText="끌격은 제외" />
          <ButtonGroup name="밀격" properties={buttonProperty["밀격"]} />
        </div>

        <div>
          <Label
            text="버프 불능"
            tooltipText="일정 시간동안 몬스터가 버프를 못하게 하는 스킬 유무"
          />
          <ButtonGroup
            name="버프 불능"
            properties={buttonProperty["버프 불능"]}
          />
        </div>
        <div>
          <Label text="버프 해제" tooltipText="디스펠 등의 스킬 유무" />
          <ButtonGroup
            name="버프 해제"
            properties={buttonProperty["버프 해제"]}
          />
        </div>
        <div>
          <Label
            text="자체 바인드"
            tooltipText="5차 공용 바인드를 제외한 자체 바인드 유무"
          />
          <ButtonGroup name="바인드" properties={buttonProperty["바인드"]} />
        </div>
        <div>
          <Label
            text="무적"
            tooltipText="가지고 있는 무적기 중 가장 긴 시간. 실제 플레이에서는 가동률이 더 중요할 수 있음."
          />
          <ButtonGroup name="무적" properties={buttonProperty["무적"]} />
        </div>
        <div>
          <Label text="부활 및 사망 방지" />
          <ButtonGroup
            name="부활 및 사망 방지"
            properties={buttonProperty["부활 및 사망 방지"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
