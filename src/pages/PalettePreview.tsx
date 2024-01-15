import React from "react";
import Navbar from "../components/Preview/Nav/Navbar";
import Sidebar from "../components/Preview/Sidebar/Sidebar";
import Content from "../components/Preview/Content/Content";
import Footer from "../components/Preview/Footer/Footer";

const PalettePreview: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default PalettePreview;
