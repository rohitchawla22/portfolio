import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Timeline
        <img
          className="sqD w-12 -top-6 -right-8 absolute"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl">
        For me, curiosity is the best weapon that I have my arsenal.
        What I truly believe is being rewarded for effort and not for results.
        This is the reason why I put in extra effort in learning more and growing my skills with story work as well Hack-Week.
      </p>
    </div>
  );
}

export default Heading;
