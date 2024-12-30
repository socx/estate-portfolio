import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const OnboardingOptions = ({onboardingType, onChangeOnboardingType, getNextStep}) => {


  return (
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Tell us what you'd like to do</h1>
        {/* Form */}
        <form>
          <div className="space-y-3 mb-8">
            <label className="relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" checked={onboardingType !== 'USE_ACCESS_CODE'} onChange={() => onChangeOnboardingType('ADD_ASSET')} />
              <div className="flex items-center bg-white text-sm font-medium text-gray-800 dark:text-gray-100 p-4 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition">
                <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                  <path className="text-violet-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                  <path className="text-violet-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                  <path className="text-violet-200" d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z" />
                </svg>
                <span>I want to add new asset(s)</span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500 rounded-lg pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
            <label className="relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" checked={onboardingType === 'USE_ACCESS_CODE'} onChange={() => onChangeOnboardingType('USE_ACCESS_CODE')} />
              <div className="flex items-center bg-white text-sm font-medium text-gray-800 dark:text-gray-100 p-4 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition">
                <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                  <path className="text-violet-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                  <path className="text-violet-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                </svg>
                <span>I have access code for existing asset(s) </span>
              </div>
              <div
                className="absolute inset-0 border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500 rounded-lg pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto"
              to="/onboarding/asset-class"
              onClick={getNextStep}
              >
              Next Step -&gt;
            </Link>
          </div>
        </form>
      </div>
  );
}

export default OnboardingOptions;
