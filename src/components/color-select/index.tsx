import React from "react";

export const colors = [
  "black",
  "white",
  "dimgray",
  "sienna",
  "tan",
  "navy",
  "cornflowerblue",
  "teal",
  "darkolivegreen",
  "mediumseagreen",
  "purple",
  "plum",
  "gold",
  "darkorange",
  "orangered",
  "firebrick",
] as const;

export const ColorSelect: React.FC<{
  selected: typeof colors[number];
  onChange: (color: typeof colors[number]) => void;
}> = ({ selected, onChange }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8,1fr)",
        justifyContent: "center",
        alignItems: "center",
        gap: "3px",
      }}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{
            padding: "3px",
            borderRadius: "999px",
            border:
              selected === color
                ? `3px solid ${color === "white" ? "gainsboro" : color}`
                : "3px solid transparent",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: color,
              borderRadius: "999px",
              border: `1px solid ${
                color === "white" ? "gainsboro" : "transparent"
              }`,
            }}
            onClick={() => onChange(color)}
          />
        </div>
      ))}
    </div>
  );
};
