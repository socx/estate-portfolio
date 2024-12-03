import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Asset } from '../interfaces/assetInterfaces';
import { saveAsset } from '../services/assetService';

export const createAsset = async (req: Request, res: Response) => {

  const { 
    type,
    acquisitionDate,
    acquisitionPrice,
    address,
    marketValue,
    minimumEquity,
    financeOutstanding,
    financeProvider,
    investment,
    periodicIncome,
    shareholders
  } = req.body;

  console.log({
    type,
    acquisitionDate,
    acquisitionPrice,
    address,
    marketValue,
    minimumEquity,
    financeOutstanding,
    financeProvider,
    investment,
    periodicIncome,
    shareholders
  })
    
  // call asset service
  const asset: Asset = {
    type,
    acquisitionDate,
    acquisitionPrice,
    address,
    financeOutstanding,
    financeProvider,
    investment,
    marketValue,
    minimumEquity,
    periodicIncome,
    shareholders
  };
  const savedAsset = await saveAsset(asset);
  if (savedAsset) {
    // TODO call email service to alert of creation of new asset.
    return res.status(StatusCodes.OK).json({message: 'Asset saved successfully', savedAsset});
  }
  return res.status(StatusCodes.CREATED).json({message: `Could not save asset...`});
};