import React from "react";
import "./Content.scss";

interface ContentProps {
  backgroundColor?: string;
  textColor?: string;
}

const Content: React.FC<ContentProps> = ({ backgroundColor, textColor }) => {
  return (
    <div className="content" style={{ backgroundColor, color: textColor }}>
      <h1>Welcome</h1>
      <p>This is the main content section.</p>

      <section className="section">
        <h2>Section 1</h2>
        <p>More detailed information can go here.</p>
        <button className="modern-button">Click Me</button>
      </section>

      <section className="section">
        <h2>Section 2</h2>
        <p>Another section with different information.</p>
        <img
          src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Descriptive Alt Text"
        />
      </section>

      <section className="section">
        <h2>Section 3</h2>
        <p>Final section with its own content.</p>
        <a href="/" className="link-button">
          Learn More
        </a>
      </section>
    </div>
  );
};

export default Content;
