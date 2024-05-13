import { Dispatch, SetStateAction } from "react";

const ButtonGroup = ({
  name,
  properties,
  value,
  filter,
  setFilter,
}: {
  name: string;
  properties: string[];
  value: string;
  filter: { [key: string]: string };
  setFilter: Dispatch<SetStateAction<{ [key: string]: string }>>;
}) => {
  return (
    <div className="flex flex-wrap border border-[#00B2C4] bg-[#94D0C9] rounded-[15px] w-fit px-3 py-1 mt-1">
      {properties.map((property, index) => (
        <div
          onClick={() => {
            if (property !== value) {
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
          }}
          key={index}
          className={`w-fit px-3 py-1 cursor-pointer rounded-[15px] shrink-0 transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-[#00A6DE] ${property === value ? "bg-[#00A6DE] text-white" : ""}`}
        >
          {property}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
