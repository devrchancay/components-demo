import React from "react";
import { TagContainer } from "./styles";

interface TagsProps {
  label: string;
  variant?: "success" | "default" | "error";
}

export const Tag: React.FC<TagsProps> = ({ label, variant = "default" }) => {
  return (
    <TagContainer role="tag" variant={variant}>
      {label}
    </TagContainer>
  );
};
