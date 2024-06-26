import { Tooltip } from "@nextui-org/tooltip";
import { PROPERTY_TO_KR } from "../constants";

const Label = ({
  text,
  tooltipText,
}: {
  text: string;
  tooltipText?: string;
}) => {
  return (
    <div className="flex items-center mt-3">
      <div className="w-fit">{PROPERTY_TO_KR[text]}</div>
      {tooltipText && (
        <Tooltip content={tooltipText}>
          <svg
            className="w-6 h-6 ml-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Tooltip>
      )}
    </div>
  );
};
export default Label;
