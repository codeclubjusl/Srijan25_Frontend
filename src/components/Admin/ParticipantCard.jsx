import React from "react";

const ParticipantCard = ({ participant }) => {
  return (
    <div className="text-white my-2 p-5 rounded-md shadow-md border-2 border-white">
      Team Name: {participant.name}
      <div className="flex flex-wrap">
        Team Members:{}
        {participant.members.map((member) => (
          <span key={member._id}>
            &nbsp;{member.user.name} &#40;{member.user.email}&#41;,
          </span>
        ))}
      </div>
      <div>
        Status:{" "}
        <span
          className={`${participant.status !== "complete" ? "text-yellow-500" : "text-green-500"} font-bold`}
        >
          {participant.status}
        </span>
      </div>
    </div>
  );
};

export default ParticipantCard;
