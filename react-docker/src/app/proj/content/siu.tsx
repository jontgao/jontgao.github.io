import TLDR from "@/app/components/tldr";

export default function ContentSiu() {
    return (
        <div className="proj-content-styles">
            <TLDR key="siu-0" cols={[{title:"Skills",items:["Machine Learning"]}, {title:"Timeline",items:["December 2024 - September 2025"]}, {title:"Role",items:["Machine Learning Researcher"]}, {title:"Team",items:["LOAD Lab"]}]}/>
            <p key="siu-1">I'm currently conducting machine learning research at SIU. My work consists in two major areas: online learning for shifting data streams and time-series forecasting. More details coming soon!</p>
        </div>
    )
}
