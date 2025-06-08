import React from "react";
import Image from "next/image";
import Text from "components/atoms/Text";

interface AchievementCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
}

const AchievementCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  imageWidth = 100,
  imageHeight = 100,
}: AchievementCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className="text-left grid gap-1">
        <Text value={title} textStyle="SectionTitle" />
        <Text value={description} textStyle="SectionParagraph" />
      </div>
    </div>
  );
};

export default AchievementCard;
export type { AchievementCardProps };
