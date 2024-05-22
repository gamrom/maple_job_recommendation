import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "..//atoms";

const ButtonGroup = ({
  name,
  properties,
}: {
  name: string;
  properties: string[];
}) => {
  const [filter, setFilter] = useRecoilState<any>(filterState);
  console.log(filter);

  const onClickFilter = (property: string) => {
    if (property !== filter[name]) {
      setFilter({
        ...filter,
        [name]: property,
      });
    } else {
      setFilter({
        ...filter,
        [name]: "",
      });
    }
  };

  return (
    <div className="flex flex-wrap border border-[#00B2C4] bg-[#94D0C9] rounded-[15px] w-fit px-3 py-1 mt-1">
      {properties.map((property, index) => (
        <div
          onClick={() => onClickFilter(property)}
          key={index}
          className={`w-fit px-3 py-1 cursor-pointer rounded-[15px] shrink-0 transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-[#00A6DE] ${property === filter[name] ? "bg-[#00A6DE] text-white" : ""}`}
        >
          {property}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
