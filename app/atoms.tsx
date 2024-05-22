import { atom, RecoilState } from "recoil";
import { JOB_NAMES } from "./constants";

export const filterState = atom({
  key: "toggleFilter", // unique ID (with respect to other atoms/selectors)
  default: {} as any,
});

export const jobState = atom({
  key: "jobState",
  default: JOB_NAMES as string[],
});

// {
//     직업군: "",
//     "자력 풀공속": "",
//     "보조무기 강화": "",
//     주스탯: "",
//     부스탯: "",
//     속성: "",
//     "추가 타격": "",
//     풀스탠스: "",
//     "슈퍼 스탠스": "",
//     MP가드: "",
//     가드: "",
//     점프: "",
//     "공중 하강": "",
//     "버프 불능": "",
//     "버프 해제": "",
//     바인드: "",
//     무적: "",
//     "부활 및 사망 방지": "",
//   },
