import React from "react";

function SummaryCard({
  title,
  data,
  Icon,
  color,
}: {
  title: string;
  data: string;
  Icon: React.FC;
  color: string;
}) {
  return (
    <div
      className={`summary-card__container bg-${color} flex items-center grow gap-1`}
    >
      <div className="icon">
        <Icon size="30" />
      </div>
      <div className="content">
        <h4 className="text-md font-medium">{title}</h4>
        <p className="text-regular">{data}</p>
      </div>
    </div>
  );
}

export default SummaryCard;
