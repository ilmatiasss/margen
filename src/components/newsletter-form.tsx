"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "./icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="text-sm text-muted">
        Gracias por suscribirte. Revisa tu correo para confirmar.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center gap-3 border-b border-foreground/40 pb-2"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Tu correo electrónico"
        className="w-full bg-transparent text-sm text-foreground placeholder:text-subtle focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Suscribirse"
        className="shrink-0 text-foreground transition-all hover:translate-x-1 hover:text-accent"
      >
        <ArrowIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
