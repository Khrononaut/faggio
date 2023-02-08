import React from "react";
import Icon from "../../icons/Icon";

interface Props {
  className?: string;
}

export default function OfficesCardGuidon({ className }: Props) {
  return (
    <button
      className={`rounded-lg border-2 border-amber-800 bg-amber-600 px-3 py-2 text-sm text-amber-900 ${className}`}
    >
      <a href="#" className="flex items-center">
        <Icon
          icon="arrowTopRightOnSquare"
          className="mr-1 h-6 w-6 opacity-50"
        />
        <span className="font-mono uppercase tracking-wider">mehr</span>
      </a>
    </button>
  );
}
