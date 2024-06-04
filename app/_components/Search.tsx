"use client";

import Label from "@/components/Label";
import ButtonGroup from "@/components/ButtonGroup";
import { useEffect, useState } from "react";
import CharCard from "@/components/CharCard";
import { JOB_NAMES } from "../constants";
import { useRecoilState } from "recoil";
import { filterState, jobState } from "../atoms";
import { Tjob } from "@/types";
import { RecoilState } from "recoil";

const Search = ({ data }: { data: Tjob[] }) => {
  const buttonProperty = {
    job_type: ["전사", "마법사", "궁수", "도적", "해적", "복합"],
    job_role: ["서포터", "퓨어 딜러", "세미 시너지 딜러", "시너지 딜러"],
    base_attack_speed: ["가능", "불가능"],
    secondary_weapon_power: ["가능", "불가능"],
    main_stat: ["STR", "DEX", "INT", "LUK"],
    attribute: ["물리", "불", "얼음", "전기", "독", "성", "암흑"],
    additional_hit: ["가능", "불가능"],
    super_stance: ["가능", "불가능"],
    guard_possible: ["가능", "불가능"],
    jump: ["더블", "트리플"],
    air_descent: ["가능", "불가능"],
    knock_back: ["가능", "불가능"],
    buff_disabled: ["가능", "불가능"],
    buff_removal: ["가능", "불가능"],
    self_bind: ["보유", "미보유"],
    resurrection: ["보유", "미보유"],
    death_prevention: ["보유", "미보유"],
  };

  const [jobs, setJobs] = useRecoilState<string[]>(jobState);
  const filter = useRecoilState(filterState);
  console.log(data);

  useEffect(() => {
    let filteredJobs: any = data.map((job) => job.name);
    const keys = Object.keys(filter);
    if (keys.length === 0) {
      return setJobs(filteredJobs);
    }
    () => setJobs(filteredJobs);
  }, [filter, data]);

  return (
    <div className="grid grid-cols-1 mt-8 page_layout_style md:grid-cols-2">
      <div className="flex flex-wrap justify-center order-last mt-3 md:order-first">
        {jobs.map((jobName, index) => {
          return <CharCard key={`job_card_${index}`} name={jobName} />;
        })}
      </div>

      <div className="flex flex-wrap gap-[10px] content-start">
        <div className="flex flex-col">
          <Label text="job_type" />
          <ButtonGroup
            name="job_type"
            properties={buttonProperty["job_type"]}
          />
        </div>

        <div className="flex flex-col">
          <Label text="job_role" tooltipText="주 선택 무기 기준" />
          <ButtonGroup
            name="job_role"
            properties={buttonProperty["job_role"]}
          />
        </div>

        <div className="flex flex-col">
          <Label text="base_attack_speed" tooltipText="주 선택 무기 기준" />
          <ButtonGroup
            name="base_attack_speed"
            properties={buttonProperty["base_attack_speed"]}
          />
        </div>

        <div>
          <Label text="secondary_weapon_power" />
          <ButtonGroup
            name="secondary_weapon_power"
            properties={buttonProperty["secondary_weapon_power"]}
          />
        </div>
        <div>
          <Label text="main_stat" />
          <ButtonGroup
            name="main_stat"
            properties={buttonProperty["main_stat"]}
          />
        </div>

        <div>
          <Label text="attribute" />
          <ButtonGroup
            name="attribute"
            properties={buttonProperty["attribute"]}
          />
        </div>
        <div>
          <Label
            text="additional_hit"
            tooltipText="쉐도우 파트너 등, 최종 데미지 효율에 영향을 받지 않는 데미지 증가"
          />
          <ButtonGroup
            name="additional_hit"
            properties={buttonProperty["additional_hit"]}
          />
        </div>

        <div>
          <Label text="super_stance" />
          <ButtonGroup
            name="super_stance"
            properties={buttonProperty["super_stance"]}
          />
        </div>

        <div>
          <Label
            text="guard_possible"
            tooltipText="상태이상, 피격 회피 등의 가드 유무"
          />
          <ButtonGroup
            name="guard_possible"
            properties={buttonProperty["guard_possible"]}
          />
        </div>
        <div>
          <Label text="jump" tooltipText="기본 점프 스킬 기준" />
          <ButtonGroup name="jump" properties={buttonProperty["jump"]} />
        </div>

        <div>
          <Label
            text="air_descent"
            tooltipText="텔레포트, 거스트다이브, 버스트 스탭 등"
          />
          <ButtonGroup
            name="air_descent"
            properties={buttonProperty["air_descent"]}
          />
        </div>

        <div>
          <Label
            text="knock_back"
            tooltipText="밀격과 넉백 유무. 끌격은 제외"
          />
          <ButtonGroup
            name="knock_back"
            properties={buttonProperty["knock_back"]}
          />
        </div>

        <div>
          <Label
            text="buff_disabled"
            tooltipText="일정 시간동안 몬스터가 버프를 못하게 하는 스킬 유무"
          />
          <ButtonGroup
            name="buff_disabled"
            properties={buttonProperty["buff_disabled"]}
          />
        </div>
        <div>
          <Label text="buff_removal" tooltipText="디스펠 등의 스킬 유무" />
          <ButtonGroup
            name="buff_removal"
            properties={buttonProperty["buff_removal"]}
          />
        </div>
        <div>
          <Label
            text="self_bind"
            tooltipText="5차 공용 바인드를 제외한 자체 바인드 유무"
          />
          <ButtonGroup
            name="self_bind"
            properties={buttonProperty["self_bind"]}
          />
        </div>

        <div>
          <Label text="resurrection" />
          <ButtonGroup
            name="resurrection"
            properties={buttonProperty["resurrection"]}
          />
        </div>

        <div>
          <Label text="death_prevention" />
          <ButtonGroup
            name="death_prevention"
            properties={buttonProperty["death_prevention"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
