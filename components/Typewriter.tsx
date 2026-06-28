"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    // Pause at the end of a fully-typed word before deleting.
    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }

    // Move to the next word once fully deleted.
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="caret" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
