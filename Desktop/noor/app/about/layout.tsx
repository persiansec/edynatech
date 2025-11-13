import React from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="about-layout">
      <header>About Header</header>
      <main>{children}</main>
      <footer>About Footer</footer>
    </div>
  );
}
