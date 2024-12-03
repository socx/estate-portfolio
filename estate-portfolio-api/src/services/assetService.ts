import { Asset } from "../interfaces/assetInterfaces";
import { AssetModel } from "../models/assetModel";


const getAssetFromModel = (assetModel: any) => {
  const {
    _id,
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
    shareholders,
    createdAt,
    updatedAt,
    deletedAt
  } = assetModel
  const asset: Asset = {
    id: _id ? _id.toString() : null,
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
    shareholders,
    createdAt: createdAt ? createdAt.toISOString() : null,
    updatedAt: updatedAt ? updatedAt.toISOString() : null,
    deletedAt: deletedAt ? deletedAt.toISOString() : null,
  }
  return asset;
}

export const saveAsset = async (
    asset: Asset,
  ) : Promise<Asset> => {
    console.log('Inside service ===> ')
    console.log({...asset})
  const newAsset = await AssetModel.create({...asset});
  return getAssetFromModel(newAsset.toObject());
}
