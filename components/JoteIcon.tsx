"use client";

export default function JoteIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 6 C13 6 10 8 8 10 C5 12 2 13 2 13 C2 13 5 14 7 13 C5 16 5 20 7 23 C9 26 12 27 12 27 C12 27 11 24 12 21 C13 18 15 17 16 17 C17 17 19 18 20 21 C21 24 20 27 20 27 C20 27 23 26 25 23 C27 20 27 16 25 13 C27 14 30 13 30 13 C30 13 27 12 24 10 C22 8 19 6 16 6 Z"
        fill="#10B981"
      />
      <circle cx="16" cy="9" r="2.5" fill="#10B981" />
      <path d="M16 10 L14.5 12 L16 11.5 L17.5 12 Z" fill="#059669" />
      <circle cx="15.2" cy="8.5" r="0.8" fill="#0F172A" />
    </svg>
  );
}
