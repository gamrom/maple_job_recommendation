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
    "버프 불능": ["가능", "불가능"],
    "버프 해제": ["가능", "불가능"],
    바인드: ["보유", "미보유"],
    무적: ["보유", "미보유"],
    "부활 및 사망 방지": ["보유", "미보유"],
  };

  const [filter, setFilter] = useState<{
    [key: string]: string;
  }>({
    직업군: "",
    "자력 풀공속": "",
    "보조무기 강화": "",
    주스탯: "",
    부스탯: "",
    속성: "",
    "추가 타격": "",
    풀스탠스: "",
    "슈퍼 스탠스": "",
    MP가드: "",
    가드: "",
    점프: "",
    "공중 하강": "",
    "버프 불능": "",
    "버프 해제": "",
    바인드: "",
    무적: "",
    "부활 및 사망 방지": "",
  });

  return (
    <div className="page_layout_style mt-8 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-wrap order-last md:order-first mt-3 justify-center">
        {JOB_NAMES.map((jobName, index) => {
          return <CharCard key={`job_card_${index}`} name={jobName} />;
        })}
      </div>
      <div className="flex flex-wrap gap-[10px] content-start">
        <div className="flex flex-col">
          <Label text="직업군" />
          <ButtonGroup
            name="직업군"
            properties={buttonProperty["직업군"]}
            value={filter["직업군"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="flex flex-col">
          <Label text="자력 풀공속" />
          <ButtonGroup
            name="자력 풀공속"
            properties={buttonProperty["자력 풀공속"]}
            value={filter["자력 풀공속"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="보조무기 강화" />
          <ButtonGroup
            name="보조무기 강화"
            properties={buttonProperty["보조무기 강화"]}
            value={filter["보조무기 강화"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="주스탯" />
          <ButtonGroup
            name="주스탯"
            properties={buttonProperty["주스탯"]}
            value={filter["주스탯"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="부스탯" />
          <ButtonGroup
            name="부스탯"
            properties={buttonProperty["부스탯"]}
            value={filter["부스탯"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="속성" />
          <ButtonGroup
            name="속성"
            properties={buttonProperty["속성"]}
            value={filter["속성"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="추가 타격" />
          <ButtonGroup
            name="추가 타격"
            properties={buttonProperty["추가 타격"]}
            value={filter["추가 타격"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="풀스탠스" />
          <ButtonGroup
            name="풀스탠스"
            properties={buttonProperty["풀스탠스"]}
            value={filter["풀스탠스"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="슈퍼 스탠스" />
          <ButtonGroup
            name="슈퍼 스탠스"
            properties={buttonProperty["슈퍼 스탠스"]}
            value={filter["슈퍼 스탠스"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="MP가드" />
          <ButtonGroup
            name="MP가드"
            properties={buttonProperty["MP가드"]}
            value={filter["MP가드"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="가드" />
          <ButtonGroup
            name="가드"
            properties={buttonProperty["가드"]}
            value={filter["가드"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="점프" />
          <ButtonGroup
            name="점프"
            properties={buttonProperty["점프"]}
            value={filter["점프"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="공중 하강" />
          <ButtonGroup
            name="공중 하강"
            properties={buttonProperty["공중 하강"]}
            value={filter["공중 하강"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="버프 불능" />
          <ButtonGroup
            name="버프 불능"
            properties={buttonProperty["버프 불능"]}
            value={filter["버프 불능"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="버프 해제" />
          <ButtonGroup
            name="버프 해제"
            properties={buttonProperty["버프 해제"]}
            value={filter["버프 해제"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="바인드" />
          <ButtonGroup
            name="바인드"
            properties={buttonProperty["바인드"]}
            value={filter["바인드"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="무적" />
          <ButtonGroup
            name="무적"
            properties={buttonProperty["무적"]}
            value={filter["무적"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div>
          <Label text="부활 및 사망 방지" />
          <ButtonGroup
            name="부활 및 사망 방지"
            properties={buttonProperty["부활 및 사망 방지"]}
            value={filter["부활 및 사망 방지"]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
