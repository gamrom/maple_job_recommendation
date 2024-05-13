import Image from "next/image";

const CharCard = ({ name }: { name: string }) => {
  return (
    <div className="char_info_list_item">
      <Image
        src={`/images/char/${textToImageName[name]}.png`}
        width={200}
        height={200}
        alt={"캐릭터이미지"}
      />
      <span>
        <em>{name}</em>
      </span>
    </div>
  );
};

export default CharCard;

const textToImageName: {
  [key: string]: string;
} = {
  히어로: "char1",
  팔라딘: "char2",
  다크나이트: "char3",
  소울마스터: "char4",
  미하일: "char5",
  블래스터: "char6",
  "데몬 슬레이어": "char7",
  "데몬 어벤져": "char8",
  아란: "char9",
  카이저: "char10",
  아델: "char11",
  제로: "char12",
  "아크메이지(불,독)": "char13",
  "아크메이지(썬,콜)": "char14",
  비숍: "char15",
  플레임위자드: "char16",
  배틀메이지: "char17",
  에반: "char18",
  루미너스: "char19",
  일리움: "char20",
  라라: "char21",
  키네시스: "char22",
  보우마스터: "char23",
  신궁: "char24",
  패스파인더: "char25",
  윈드브레이커: "char26",
  와일드헌터: "char27",
  메르세데스: "char28",
  카인: "char29",
  나이트로드: "char30",
  섀도어: "char31",
  듀얼블레이드: "char32",
  나이트워커: "char33",
  제논: "char34",
  팬텀: "char35",
  카데나: "char36",
  칼리: "char37",
  호영: "char38",
  바이퍼: "char39",
  캡틴: "char40",
  캐논슈터: "char41",
  스트라이커: "char42",
  메카닉: "char43",
  은월: "char45",
  엔젤릭버스터: "char46",
  아크: "char47",
};
