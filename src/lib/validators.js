import {
  core,
  assets
} from '@algonaut/algo-validation-agent/dist/algo-validation-agent.cjs';

export function algoAddress(val) {
  if (!core.isAlgorandAddress(val)) {
    return 'Please provide a valid Algorand address';
  }
  return [];
}

export function assetName(val) {
  if (!assets.assetName(val)) {
    return 'Please provide an asset name with less than 32 characters';
  }
  return [];
}

export function unitName(val) {
  if (!assets.assetName(val)) {
    return 'Please provide a unit name with less than 8 characters';
  }
  return [];
}

export function totalIssuance(val) {
  if (!assets.assetTotalIssuance(val)) {
    return `Please provide a valid number of assets under
    ${Number.MAX_SAFE_INTEGER} to add to the reserve`;
  }
  return [];
}

export default {
  assetName,
  unitName,
  totalIssuance
};
