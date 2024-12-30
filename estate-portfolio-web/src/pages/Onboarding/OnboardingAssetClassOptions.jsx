import React from 'react';
import { Link } from "react-router-dom";


const OnboardingAssetClassOptions = ({assetType, onChangeAssetType, getNextStep, getPreviousStep}) => {

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Type of assets you want to add</h1>
      {/* Form */}
      <form>
        <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
          <label className="flex-1 relative block cursor-pointer">
            <input type="radio" name="radio-buttons" className="peer sr-only" checked={assetType !== 'STOCKS'} onChange={() => onChangeAssetType('REAL_ESTATE')} />
            <div className="h-full text-center bg-white dark:bg-gray-800 px-4 py-6 rounded-lg border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition">
              <svg
                  className="inline-flex fill-current text-violet-500 mt-2 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                <path d="M13 22V11a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v13H0V14a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v8h2Zm6-15h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7H5V3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4ZM9 22v-8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8h7Zm13 0V11a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v11h7Zm-5-8v-2h3v2h-3Zm0 3v-2h3v2h-3Zm0 3v-2h3v2h-3ZM4 20v-2h3v2H4Zm0-3v-2h3v2H4Z"/>
              </svg>

              <div className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Real Estate</div>
              <div className="text-sm">Add a landed, residential or commerical property.</div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500 rounded-lg pointer-events-none"
              aria-hidden="true"
            ></div>
          </label>
          <label className="flex-1 relative block cursor-pointer">
            <input type="radio" name="radio-buttons" className="peer sr-only" checked={assetType === 'STOCKS'} onChange={() => onChangeAssetType('STOCKS')} />
            <div className="h-full text-center bg-white dark:bg-gray-800 px-4 py-6 rounded-lg border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition">
              <svg
                className="inline-flex fill-current text-violet-500 mt-2 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6z" />
              </svg>
              <div className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Stocks</div>
              <div className="text-sm">Add a stock/etf/bond.</div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500 rounded-lg pointer-events-none"
              aria-hidden="true"
            ></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <Link className="text-sm underline hover:no-underline" to="/onboarding" onClick={getPreviousStep}>
            &lt;- Back
          </Link>
          <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto"
            to="/onboarding/address"
            onClick={getNextStep}
            >
            Next Step -&gt;
          </Link>
        </div>
      </form>
    </div>
  );
}

export default OnboardingAssetClassOptions;
