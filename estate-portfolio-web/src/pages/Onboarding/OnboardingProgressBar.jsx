import React from 'react';
import { Link } from "react-router-dom";


const OnboardingProgressBar = ({step, numberOfSteps}) => {

  const getProgress = (currentStep) => {
    if (currentStep === step) {
      return "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-violet-500 text-white";
    } else {
      return "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400";
    }
  }

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
      <ul className="relative flex justify-between w-full">
        {/* {Array(numberOfSteps).fill(1).map((el, i) => { */}
        {/* {Array(4).fill(1).map((el, i) => { */}
        {Array.from({length: numberOfSteps}, (_, index) => { return (
          <li key={index + 1}>
            <Link
              className={getProgress(`${index + 1}`)}
              to={`/onboarding-${index + 1}`}
            >
              {index + 1}
            </Link>
          </li>
        )})}
      </ul>
    </div>
  );
}

export default OnboardingProgressBar;
