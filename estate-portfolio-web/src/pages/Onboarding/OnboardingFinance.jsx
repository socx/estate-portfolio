import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import Datepicker from "../../components/Datepicker";


const OnboardingFinance = ({ financeData, onChangeFinanceData, getNextStep, getPreviousStep }) => {
  const [formData, setFormData] = useState(financeData);
  
  useEffect(() => {
    onChangeFinanceData(formData);
  }, [formData]);

  const onValuationDateReady = (selectedDate) => {
    setFormData({...formData, valuationDate: selectedDate[0]})
  }

  const onValuationDateChange = (selectedDate) => {
    const valuationDate = selectedDate;
    setFormData({...formData, valuationDate });
  }

  const onAquisitionDateReady = (selectedDate) => {
    setFormData({...formData, aquisitionDate: selectedDate[0]})
  }

  const onAquisitionDateChange = (selectedDate) => {
    const aquisitionDate = selectedDate;
    setFormData({...formData, aquisitionDate });
  }

  const onChangeInput = (e) => {
    const { id, value, } = e.target;
    // validateField(e.target);
    setFormData({ ...formData, [id]: value });
  }


  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Tell us about the financials</h1>
      {/* Form */}
      <form>
        <div className="space-y-2 mb-8">
          <section>
            <h4 className="leading-snug text-gray-800 dark:text-gray-100 font-bold mb-1 mt-5">Aquisition Information</h4>
            <div className="text-sm">Particulars of the asset on aquisition.</div>
            <div className="sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="aquisitionPrice">
                  Aquisition Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="aquisitionPrice"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.aquisitionPrice}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="aquisitionDate">
                  Aquisition Date <span className="text-red-500">*</span>
                </label>
                <Datepicker
                  mode='single'
                  handleDatePickerReady={onAquisitionDateReady}
                  handleDatePickerChange={onAquisitionDateChange}
                  defaultDate={[formData.aquisitionDate]}
                  dateToUpdate={[formData.aquisitionDate]}
                />
              </div>
            </div>
          </section>

          <section>
            <h4 className="leading-snug text-gray-800 dark:text-gray-100 font-bold mt-5">Market Value</h4>
            <div className="text-sm">Valuation of the asset.</div>
            <div className="sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="valuationAmount">
                  Valuation Amount <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="valuationAmount"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.valuationAmount}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="valuationDate">
                  Valuation Date <span className="text-red-500">*</span>
                </label>
                <Datepicker
                  mode='single'
                  handleDatePickerReady={onValuationDateReady}
                  handleDatePickerChange={onValuationDateChange}
                  defaultDate={[formData.valuationDate]}
                  dateToUpdate={[formData.valuationDate]}
                />
              </div>
            </div>
          </section>

          <section>
            <h4 className="leading-snug text-gray-800 dark:text-gray-100 font-bold mt-5">Income</h4>
            <div className="text-sm">Income from assets (rent/lease).</div>
            <div className="sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="incomeAmount">Amount</label>
                <div className="relative">
                  <input
                    id="incomeAmount"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.incomeAmount}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="incomePeriod">Frequency</label>
                <select id="incomePeriod" className="form-select w-full" value={formData.incomePeriod} onChange={(e)=>onChangeInput(e)}>
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
              </div>
            </div>
          </section>
          <section>
            <h4 className="leading-snug text-gray-800 dark:text-gray-100 font-bold mt-5">Costs</h4>
            <div className="text-sm">Investment costs relating to the asset</div>
            <div className="sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="costsDeposit">Deposit</label>
                <div className="relative">
                  <input
                    id="costsDeposit"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.costsDeposit}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="costsFees">Fees</label>
                <div className="relative">
                  <input
                    id="costsFees"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.costsFees}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="costsEnhancements">Enhancements</label>
                <div className="relative">
                  <input
                    id="costsEnhancements"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.costsEnhancements}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="costsAdvance">Advance</label>
                <div className="relative">
                  <input
                    id="costsAdvance"
                    className="form-input w-full pl-12"
                    type="text"
                    value={formData.costsAdvance}
                    onChange={(e)=>onChangeInput(e)}
                  />
                  <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-3">GBP</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default OnboardingFinance;
