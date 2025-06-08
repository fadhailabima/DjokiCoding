import Text from "components/atoms/Text";
import useMobileDeviceDetection from "hooks/useMobileDetection";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
interface FaqListItemProps {
  title: string;
  description: string;
}
const FaqListItem = ({ description, title }: FaqListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobileDeviceDetection();
  return (
    <div className="w-full py-6 space-y-2.5">
      <div
        className={`flex justify-between items-center select-none ${
          isMobile ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text value={title} textStyle="FAQTitle" />
        <div className="text-white text-2xl">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      <div
        className={`
          overflow-hidden 
          transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="pt-2">
          <Text value={description} textStyle="FAQDescription" />
        </div>
      </div>
    </div>
  );
};

export default FaqListItem;
export type { FaqListItemProps };
