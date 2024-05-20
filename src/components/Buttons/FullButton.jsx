import React from "react";

export default function FullButton({ title, action, border }) {
  return (
    <button
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      style={border ? { background: "transparent" } : null}
    >
      <span className="text text--copy">{title}</span>
      <span className="shimmer"></span>
      <span className="shimmer"></span>
    </button>
  );
}
