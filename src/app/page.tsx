import React from "react";

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        title="JDD - Jatim Developer Days"
        allowFullScreen
      />
    </div>
  );
};

export default Home;
