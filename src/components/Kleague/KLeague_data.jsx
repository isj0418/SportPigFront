import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import KLeaguePlayer from "./KLeague_player";
import KLeagueTeam from "./KLeagueTeam";

export default function KLeague_Data() {
    const teamName = useLocation().state.teamFilter;
    let teamFilter = "";
    if (teamName) {
        teamFilter = teamName;
    }
    const [showPlayerList, setShowPlayerList] = useState(false);
    const [showTeamData, setShowTeamData] = useState(true);
    function togglePlayerList() {
        setShowPlayerList(true);
        setShowTeamData(false);
    }
    function toggleTeamData() {
        setShowPlayerList(false);
        setShowTeamData(true);
    }
    return (
        <div>
            <div className="kbo-data-container">
                {" "}
                {/* 이 컨테이너를 스타일링하기 위해 CSS 클래스를 적용합니다 */}
                <h2>KLeague DATA</h2>
                <div>
                    <button onClick={toggleTeamData}>KLeague Team</button>
                    <button onClick={togglePlayerList}>KLeague Player</button>
                </div>
                <div>
                    {showTeamData && <KLeagueTeam teamFilter={teamFilter} />}
                    {showPlayerList && <KLeaguePlayer teamFilter={teamFilter} />}
                </div>
            </div>
        </div>
    );
}