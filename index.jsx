import React, { useEffect } from "react";
import './style.css';

export default function Index() {
  useEffect(() => {
    function syncScale() {
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      document.documentElement.style.setProperty('--artboard-scale', scale);
    }
    window.addEventListener('resize', syncScale);
    syncScale();
    return () => window.removeEventListener('resize', syncScale);
  }, []);

  return (
    <div className="viewport-wrapper">
      <img src="background_1920.jpg" alt="Background" className="full-screen-bg" />

      <div className="artboard">
        <h1 className="heading-title">MORNING LINE ODDS</h1>

        <div className="table-board left-board"></div>
        <div className="table-board right-board"></div>

        <div className="wreath-badge-1">
          <img src="g.png" alt="Gold Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-1">1</span>
        </div>

        <div className="wreath-badge-2">
          <img src="s.png" alt="Silver Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-2">2</span>
        </div>

        <div className="wreath-badge-3">
          <img src="b.png" alt="Bronze Laurel Wreath" className="wreath-img" />
          <span className="wreath-num num-3">3</span>
        </div>

        <div className="rank-plain-4">4.</div>
        <div className="rank-plain rank-plain-5">5.</div>
        <div className="rank-plain rank-plain-6">6.</div>
        <div className="rank-plain rank-plain-7">7.</div>
        <div className="rank-plain rank-plain-8">8.</div>
        <div className="rank-plain rank-plain-9">9.</div>
        <div className="rank-plain rank-plain-10">10.</div>

        <div className="team-name team-row-1">TEAM ABC</div>
        <div className="team-name team-row-2">TEAM ABC</div>
        <div className="team-name team-row-3">TEAM ABC</div>
        <div className="team-name team-row-4">TEAM ABC</div>
        <div className="team-name team-row-5">TEAM ABC</div>
        <div className="team-name team-row-6">TEAM ABC</div>
        <div className="team-name team-row-7">TEAM ABC</div>
        <div className="team-name team-row-8">TEAM ABC</div>
        <div className="team-name team-row-9">TEAM ABC</div>
        <div className="team-name team-row-10">TEAM ABC</div>

        <div className="team-score score-row-1">300</div>
        <div className="team-score score-row-2">300</div>
        <div className="team-score score-row-3">300</div>
        <div className="team-score score-row-4">300</div>
        <div className="team-score score-row-5">300</div>
        <div className="team-score score-row-6">300</div>
        <div className="team-score score-row-7">300</div>
        <div className="team-score score-row-8">300</div>
        <div className="team-score score-row-9">300</div>
        <div className="team-score score-row-10">300</div>

        <div className="rank-plain rank-plain-r1">11.</div>
        <div className="rank-plain rank-plain-r2">12.</div>
        <div className="rank-plain rank-plain-r3">13.</div>
        <div className="rank-plain rank-plain-r4">14.</div>
        <div className="rank-plain rank-plain-r5">15.</div>
        <div className="rank-plain rank-plain-r6">16.</div>
        <div className="rank-plain rank-plain-r7">17.</div>
        <div className="rank-plain rank-plain-r8">18.</div>
        <div className="rank-plain rank-plain-r9">19.</div>
        <div className="rank-plain rank-plain-r10">20.</div>

        <div className="team-name team-row-r1">TEAM ABC</div>
        <div className="team-name team-row-r2">TEAM ABC</div>
        <div className="team-name team-row-r3">TEAM ABC</div>
        <div className="team-name team-row-r4">TEAM ABC</div>
        <div className="team-name team-row-r5">TEAM ABC</div>
        <div className="team-name team-row-r6">TEAM ABC</div>
        <div className="team-name team-row-r7">TEAM ABC</div>
        <div className="team-name team-row-r8">TEAM ABC</div>
        <div className="team-name team-row-r9">TEAM ABC</div>
        <div className="team-name team-row-r10">TEAM ABC</div>

        <div className="team-score score-row-r1">300</div>
        <div className="team-score score-row-r2">300</div>
        <div className="team-score score-row-r3">300</div>
        <div className="team-score score-row-r4">300</div>
        <div className="team-score score-row-r5">300</div>
        <div className="team-score score-row-r6">300</div>
        <div className="team-score score-row-r7">300</div>
        <div className="team-score score-row-r8">300</div>
        <div className="team-score score-row-r9">300</div>
        <div className="team-score score-row-r10">300</div>
      </div>
    </div>
  );
}
