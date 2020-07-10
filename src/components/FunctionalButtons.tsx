import React from 'react';

interface FunctionalButtonProps {
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
  isStarted: boolean;
  isStopped: boolean;
  isReseted: boolean;
}

const FunctionalButtons = (props: FunctionalButtonProps) => {
  return (
    <div className="button-group">
      <button disabled={props.isStarted} onClick={props.handleStart}>
        Start
      </button>
      <button disabled={props.isStopped} onClick={props.handleStop}>
        Stop
      </button>
      <button disabled={props.isReseted} onClick={props.handleReset}>
        Reset
      </button>
    </div>
  );
};

export default FunctionalButtons;
