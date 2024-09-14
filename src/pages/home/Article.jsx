import React from "react";

const Article = () => {
  const messages = [
    "Top 10 Rising Stars in the NHL to Watch This Season",
    "Mid-Season Power Rankings: Which Teams Are Dominating?",
    "Breaking Down the Latest NHL Trades and Transfers",
    "The Impact of Rookie Players on Their Teams’ Playoff Chances",
    "Injury Report: Key Players Out for the Rest of the Season",
    "How This Year’s Stanley Cup Contenders Stack Up",
    "The Biggest Surprises and Disappointments in the NHL",
    "Behind the Bench: The Coaching Decisions That Changed the Game",
    "NHL All-Star Weekend: Highlights and Memorable Moments",
    "A Look Back at Historic Rivalries in Hockey",
    "The Evolution of Hockey Analytics: How Data Is Changing the Game",
    "Goalies in the Spotlight: Top Saves of the Season",
    "NHL Draft Preview: Prospects to Keep an Eye On",
    "How Offseason Moves Are Shaping the Future of Hockey Teams",
    "Player Profiles: Inside the Lives of NHL's Top Athletes",
    "Breaking Down the NHL's New Rule Changes and Their Impact",
    "The Rise of Women’s Hockey: Milestones and Future Prospects",
    "Can This Year’s Underdogs Make a Deep Playoff Run?",
    "Analyzing the Best Defensive Pairings in the NHL",
    "The Financial Side of Hockey: Salary Caps and Team Spending Trends",
  ];

  return (
    <div className="lg:w-[500px] text-white overflow-hidden p-2 rounded-2xl">
      <div className="flex items-center justify-between p-2 border border-[#4a8dcb] rounded-xl w-full mx-auto mb-3">
        <div className="flex items-center justify-center gap-3 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
          Articles
        </div>
      </div>
      <div className=" overflow-y-auto h-[370px] noScrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-start hover:bg-[#00000064] cursor-pointer border-b border-[#4a8dcb] px-2 py-2"
          >
            <div>
              <div className="text-sm">{msg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
