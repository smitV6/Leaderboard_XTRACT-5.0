import React, { useEffect } from "react";
import "./App.css";

// JSON structure ready for the backend team to later replace with an API fetch
const boardData = {
  title: "MORNING LINE ODDS",
  teams: [
    { rank: 1, name: "TEAM 1", score: "100" },
    { rank: 2, name: "TEAM 2", score: "200" },
    { rank: 3, name: "TEAM 3", score: "300" },
    { rank: 4, name: "TEAM 4", score: "NA" },
    { rank: 5, name: "TEAM 5", score: "NA" },
    { rank: 6, name: "TEAM 6", score: "NA" },
    { rank: 7, name: "TEAM 7", score: "NA" },
    { rank: 8, name: "TEAM 8", score: "NA" },
    { rank: 9, name: "TEAM 9", score: "NA" },
    { rank: 10, name: "TEAM 10", score: "NA" },
    { rank: 11, name: "TEAM 11", score: "NA" },
    { rank: 12, name: "TEAM 12", score: "600" },
    { rank: 13, name: "TEAM 13", score: "NA" },
    { rank: 14, name: "TEAM 14", score: "NA" },
    { rank: 15, name: "TEAM 15", score: "NA" },
    { rank: 16, name: "TEAM 16", score: "NA" },
    { rank: 17, name: "TEAM 17", score: "NA" },
    { rank: 18, name: "TEAM 18", score: "NA" },
    { rank: 19, name: "TEAM 19", score: "NA" },
    { rank: 20, name: "TEAM 20", score: "NA" },
  ],
};
const App = () => {
  useEffect(() => {
    // 1. Define the scaling function
    const syncScale = () => {
      const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080,
      );
      document.documentElement.style.setProperty("--artboard-scale", scale);
    };

    // 2. Run it immediately on mount
    syncScale();

    // 3. Add the resize event listener
    window.addEventListener("resize", syncScale);

    // 4. Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", syncScale);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  // Split teams into Left Column (1-10) and Right Column (11-20)
  const leftTeams = boardData.teams.slice(0, 10);
  const rightTeams = boardData.teams.slice(10, 20);

  return (
    <div className="viewport-wrapper">
      <img
        src="background_1920.jpg"
        alt="Background"
        className="full-screen-bg"
      />

      <div className="artboard">
        <h1 className="heading-title">{boardData.title}</h1>

        <div className="table-board left-board"></div>
        <div className="table-board right-board"></div>

        {/* Top 3 Wreath Badges */}
        <div className="wreath-badge-1">
          <img src="g.png" alt="Gold Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-1">{leftTeams[0]?.rank}</span>
        </div>

        <div className="wreath-badge-2">
          <img src="s.png" alt="Silver Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-2">{leftTeams[1]?.rank}</span>
        </div>

        <div className="wreath-badge-3">
          <img src="b.png" alt="Bronze Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-3">{leftTeams[2]?.rank}</span>
        </div>

        {/* Left Column (Ranks 1–10) */}
        {leftTeams.map((team, index) => {
          const rowNum = index + 1;
          return (
            <React.Fragment key={`left-row-${rowNum}`}>
              {rowNum > 3 && (
                <div className={`rank-plain rank-plain-${rowNum}`}>
                  {rowNum}.
                </div>
              )}
              <div className={`team-name team-row-${rowNum}`}>{team.name}</div>
              <div className={`team-score score-row-${rowNum}`}>
                {team.score}
              </div>
            </React.Fragment>
          );
        })}

        {/* Right Column (Ranks 11–20) */}
        {rightTeams.map((team, index) => {
          const rowNum = index + 1;
          const rankVal = index + 11;
          return (
            <React.Fragment key={`right-row-${rowNum}`}>
              <div className={`rank-plain rank-plain-r${rowNum}`}>
                {rankVal}.
              </div>
              <div className={`team-name team-row-r${rowNum}`}>{team.name}</div>
              <div className={`team-score score-row-r${rowNum}`}>
                {team.score}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
