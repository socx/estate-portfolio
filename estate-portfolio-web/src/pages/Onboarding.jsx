import React, { useEffect, useState } from 'react';

import OnboardingLayout from "./Onboarding/OnboardingLayout";
import OnboardingOptions from './Onboarding/OnboardingOptions';
import OnboardingAssetClassOptions from './Onboarding/OnboardingAssetClassOptions';
import OnboardingAddress from './Onboarding/OnboardingAddress';
import OnboardingFinance from './Onboarding/OnboardingFinance';


const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState('1');
  const [onboardingData, setOnboardingData] = useState({
    onboardingType: 'ADD_ASSET',
    assetType: 'REAL_ESTATE',
    address: {
      houseNumber: '',
      street: '',
      city: '',
      county: '',
      postcode: '',
      country: '',
    },
    financeData: {
      aquisitionPrice: '',
      aquisitionDate: '',
      costsDeposit: '',
      costsFees: '',
      costsEnhancements: '',
      costsAdvance: '',
      incomePeriod: '',
      valuationAmount: '',
      valuationDate: '',
      incomeAmount: '',
    }
  });

  const onChangeOnboardingType = (onboardingType) => {
    const assetType = onboardingType === 'ADD_ASSET' && onboardingData.assetType === '' ? 'REAL_ESTATE' : onboardingData.assetType;
    setOnboardingData({...onboardingData, onboardingType, assetType});
  }

  const onChangeAssetType = (assetType) => {
    setOnboardingData({...onboardingData, assetType});
  }

  const onChangeAddress = (address) => {
    setOnboardingData({...onboardingData, address});
  }

  const onChangeFinanceData = (financeData) => {
    setOnboardingData({...onboardingData, financeData});
  }

  useEffect(() => {
  }, [onboardingData, onboardingData.onboardingType, onboardingData.assetType])

  const getNextStep = () => {
    switch(currentStep) {
      case '1':
        setCurrentStep('2');
        return;
      case '2':
        setCurrentStep('3');
        return;
      case '3':
        setCurrentStep('4');
        return;
      default:
        setCurrentStep('1');
        return;
    }
  }

  const getPreviousStep = () => {
    switch(currentStep) {
      case '2':
        setCurrentStep('1');
        return;
      case '3':
        setCurrentStep('2');
        return;
      case '4':
        setCurrentStep('3');
        return;
    }
  }

  return (
    <OnboardingLayout step={currentStep} numberOfSteps={6}>
      {currentStep === '1' &&
        <OnboardingOptions
          step={'1'}
          getNextStep={getNextStep}
          getPreviousStep={getPreviousStep}
          onChangeOnboardingType={onChangeOnboardingType}
          onboardingType={onboardingData.onboardingType}
        />
      }
      {currentStep === '2' &&
        <OnboardingAssetClassOptions
          step={'2'}
          getNextStep={getNextStep}
          getPreviousStep={getPreviousStep}
          onChangeAssetType={onChangeAssetType}
          assetType={onboardingData.assetType}
        />
      }
      {currentStep === '3' &&
        <OnboardingAddress
          step={'3'}
          getNextStep={getNextStep}
          getPreviousStep={getPreviousStep}
          onChangeAddress={onChangeAddress}
          address={onboardingData.address}
        />
      }
      {currentStep === '4' &&
        <OnboardingFinance
          step={'4'}
          getNextStep={getNextStep}
          getPreviousStep={getPreviousStep}
          onChangeFinanceData={onChangeFinanceData}
          financeData={onboardingData.financeData}
        />
      }
    </OnboardingLayout>
              
  );
}

export default Onboarding;
