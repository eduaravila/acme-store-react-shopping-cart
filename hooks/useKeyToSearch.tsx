import React, { useEffect } from "react";

export const useKeyToSearch = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== ref.current) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
};
