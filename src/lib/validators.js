import {
  core,
  assetFieldValidators,
  transactionFieldValidators
} from '@algonaut/algo-validation-agent/dist/algo-validation-agent.cjs';

export function algoAddress(val) {
  if (!core.isAlgorandAddress(val)) {
    return 'Please provide a valid Algorand address';
  }
  return [];
}

export function assetName(val) {
  if (!assetFieldValidators.assetName(val)) {
    return 'Please provide an asset name with less than 32 characters';
  }
  return [];
}

export function assetUnitName(val) {
  if (!assetFieldValidators.assetUnitName(val)) {
    return 'Please provide a unit name with less than 8 characters';
  }
  return [];
}

export function assetTotal(val) {
  if (!assetFieldValidators.assetTotal(Number(val))) {
    return `Please provide a valid number of assets no more than
    ${Number.MAX_SAFE_INTEGER} to add to the reserve`;
  }
  return [];
}

export function amount(val) {
  if (!transactionFieldValidators.amount(Number(val))) {
    return `Please provide a valid number of assets no more than
    ${Number.MAX_SAFE_INTEGER} to send`;
  }
  return [];
}

export function assetIndex(val) {
  if (!assetFieldValidators.assetIndex(Number(val))) {
    return `Please provide a valid Algorand asset index`;
  }
}

export function assetMetadataHash(val) {
  if (!assetFieldValidators.assetMetadataHash(val)) {
    return 'Please provide a valid asset metadata hash';
  }
}

export default {
  algoAddress,
  assetName,
  assetUnitName,
  assetTotal,
  amount,
  assetIndex,
  assetMetadataHash
};
