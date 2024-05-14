import Image from "next/image";
import { TEXT_TO_IMAGE_DICT } from "../constants";

const CharCard = ({ name }: { name: string }) => {
  return (
    <div className="char_info_list_item">
      <Image
        src={`/images/char/${TEXT_TO_IMAGE_DICT[name]}.png`}
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
