import React from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-bold mb-12 text-white">
      {children}
    </h2>
  );
}
