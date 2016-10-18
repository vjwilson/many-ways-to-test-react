import React from 'react';

const renderStagePath = (width, height) => {
  const stagePath = `M 0 0 L 0 ${height} L ${width} ${height} L ${width} 0`;

  return (
    <path d={stagePath} fill="#ffffff" stroke="#000000" />
  )
};

const renderStageLabel = (width, height) => {
  const stageTextOffset = {
    x: width / 2,
    y: height * 0.6
  };

  return (
    <text textAnchor="middle" x={stageTextOffset.x} y={stageTextOffset.y} fill="#000000">Stage</text>
  )
};

const Stage = ({ width = 1024, height = 60 }) => {
  const stagePath = renderStagePath(width, height);
  const stageLabel = renderStageLabel(width, height);

  return (
    <g id="stage">
      {stageLabel}
      {stagePath}
    </g>
  )
};

export default Stage;
