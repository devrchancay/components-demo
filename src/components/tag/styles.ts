import styled from "styled-components";

interface TagContainerProps {
  variant: "success" | "default" | "error";
}

const variants = {
  success: {
    bg: "#e5f7e8",
    color: "#319b41",
    border: "none",
  },
  error: {
    bg: "#fbdbcf",
    color: "#ca360a",
    border: "none",
  },
  default: {
    bg: "#fff",
    color: "#000",
    border: "solid 1px #cecece",
  },
};

export const TagContainer = styled.span<TagContainerProps>`
  padding: 0.3rem 1rem;
  font-size: 16px;
  border-radius: 4px;
  ${(props) =>
    props.variant &&
    `
    background: ${variants[props.variant].bg || variants.default.bg};
    color: ${variants[props.variant].color || variants.default.color};
    border:${variants[props.variant].border || variants.default.border};
  `}
`;
