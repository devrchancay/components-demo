import React, { ReactNode } from "react";

interface TagsProps {
  label?: ReactNode;
  variant: "success" | "default" | "error";
}

export const Tag: React.FC<TagsProps> = ({ label, variant = "default" }) => {
  return <p className={variant}>{label}</p>;
};
