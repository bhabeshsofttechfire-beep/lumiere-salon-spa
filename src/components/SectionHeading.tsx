"use_client";
import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "center" | "left" | "right";
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
  align = "center",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : align === "right"
      ? "text-right ml-auto items-end"
      : "text-left items-start";

  return (
    <div className={`max-w-3xl flex flex-col ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C8A97E]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B38E5D]">
            {eyebrow}
          </span>
          <span className="w-8 h-[1px] bg-[#C8A97E]" />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-[1.15] ${
          dark ? "text-white" : "text-[#2A0E1D]"
        }`}
      >
        {title}{" "}
        {highlightedText && (
          <span className="italic font-serif text-[#C8A97E] font-medium">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-gray-300" : "text-[#5E4F55]"
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent ${
          align === "left" ? "self-start" : align === "right" ? "self-end" : ""
        }`}
      />
    </div>
  );
}
