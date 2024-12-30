import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const OnboardingAddress = ({ address, onChangeAddress, getNextStep, getPreviousStep }) => {
  const [formData, setFormData] = useState(address);
  
  useEffect(() => {
    onChangeAddress(formData);
  }, [formData]);

  const onChangeInput = (e) => {
    const { id, value, } = e.target;
    // validateField(e.target);
    setFormData({ ...formData, [id]: value });
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Tell us the address of your property</h1>
      {/* Form */}
      <form>
        <div className="space-y-4 mb-8">
          {/* house Number */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="houseNumber">
                House No
              </label>
              <input
                id="houseNumber"
                className="form-input "
                type="text"
                value={formData.houseNumber}
                onChange={(e)=>onChangeInput(e)}
              />
            </div>
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="street">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              id="street"
              className="form-input  w-full"
              type="text"
              value={formData.street}
              onChange={(e)=>onChangeInput(e)}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="City">
              City 
            </label>
            <input
              id="city"
              className="form-input  w-full"
              type="text"
              value={formData.city}
              onChange={(e)=>onChangeInput(e)}
            />
          </div>

          {/* County and Postal Code */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="county">
                County
              </label>
              <input
                id="county"
                className="form-input  w-full"
                type="text"
                value={formData.county}
                onChange={(e)=>onChangeInput(e)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="postcode">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                id="postcode"
                className="form-input  w-full"
                type="text"
                value={formData.postcode}
                onChange={(e)=>onChangeInput(e)}
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="form-select w-full"
              value={formData.country}
              onChange={(e)=>onChangeInput(e)}
            >
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Spain</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link className="text-sm underline hover:no-underline" to="/onboarding" onClick={getPreviousStep}>
            &lt;- Back
          </Link>
          <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto"
            to="/onboarding"
            onClick={getNextStep}
            >
            Next Step -&gt;
          </Link>
        </div>
      </form>
    </div>
  );
}

export default OnboardingAddress;
