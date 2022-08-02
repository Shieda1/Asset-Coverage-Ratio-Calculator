// https://calculator.swiftutors.com/asset-coverage-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const assetCoverageRatioRadio = document.getElementById('assetCoverageRatioRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');
const intangibleAssetsRadio = document.getElementById('intangibleAssetsRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');
const shorttermDebtRadio = document.getElementById('shorttermDebtRadio');
const totalDebtObligationsRadio = document.getElementById('totalDebtObligationsRadio');

let assetCoverageRatio;
let totalAssets = v1;
let intangibleAssets = v2;
let currentLiabilities = v3;
let shorttermDebt = v4;
let totalDebtObligations = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

assetCoverageRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Assets';
  variable2.textContent = 'Intangible Assets';
  variable3.textContent = 'Current Liabilities';
  variable4.textContent = 'Short-term Debt';
  variable5.textContent = 'Total Debt Obligations';
  totalAssets = v1;
  intangibleAssets = v2;
  currentLiabilities = v3;
  shorttermDebt = v4;
  totalDebtObligations = v5;
  result.textContent = '';
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Coverage Ratio';
  variable2.textContent = 'Intangible Assets';
  variable3.textContent = 'Current Liabilities';
  variable4.textContent = 'Short-term Debt';
  variable5.textContent = 'Total Debt Obligations';
  assetCoverageRatio = v1;
  intangibleAssets = v2;
  currentLiabilities = v3;
  shorttermDebt = v4;
  totalDebtObligations = v5;
  result.textContent = '';
});

intangibleAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Coverage Ratio';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Current Liabilities';
  variable4.textContent = 'Short-term Debt';
  variable5.textContent = 'Total Debt Obligations';
  assetCoverageRatio = v1;
  totalAssets = v2;
  currentLiabilities = v3;
  shorttermDebt = v4;
  totalDebtObligations = v5;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Coverage Ratio';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Intangible Assets';
  variable4.textContent = 'Short-term Debt';
  variable5.textContent = 'Total Debt Obligations';
  assetCoverageRatio = v1;
  totalAssets = v2;
  intangibleAssets = v3;
  shorttermDebt = v4;
  totalDebtObligations = v5;
  result.textContent = '';
});

shorttermDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Coverage Ratio';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Intangible Assets';
  variable4.textContent = 'Current Liabilities';
  variable5.textContent = 'Total Debt Obligations';
  assetCoverageRatio = v1;
  totalAssets = v2;
  intangibleAssets = v3;
  currentLiabilities = v4;
  totalDebtObligations = v5;
  result.textContent = '';
});

totalDebtObligationsRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Coverage Ratio';
  variable2.textContent = 'Total Assets';
  variable3.textContent = 'Intangible Assets';
  variable4.textContent = 'Current Liabilities';
  variable5.textContent = 'Short-term Debt';
  assetCoverageRatio = v1;
  totalAssets = v2;
  intangibleAssets = v3;
  currentLiabilities = v4;
  shorttermDebt = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(assetCoverageRatioRadio.checked)
    result.textContent = `Asset Coverage Ratio = ${computeAssetCoverageRatio().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)}`;

  else if(intangibleAssetsRadio.checked)
    result.textContent = `Intangible Assets = ${computeIntangibleAssets().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;

  else if(shorttermDebtRadio.checked)
    result.textContent = `Short-term Debt = ${computeShorttermDebt().toFixed(2)}`;

  else if(totalDebtObligationsRadio.checked)
    result.textContent = `Total Debt Obligations = ${computeTotalDebtObligations().toFixed(2)}`;
})

// calculation

function computeAssetCoverageRatio() {
  return (Number(totalAssets.value) - Number(intangibleAssets.value) - Number(currentLiabilities.value) + Number(shorttermDebt.value)) / Number(totalDebtObligations.value);
}

function computeTotalAssets() {
  return (Number(assetCoverageRatio.value) * Number(totalDebtObligations.value)) + Number(intangibleAssets.value) + Number(currentLiabilities.value) - Number(shorttermDebt.value);
}

function computeIntangibleAssets() {
  return Number(totalAssets.value) - (Number(assetCoverageRatio.value) * Number(totalDebtObligations.value)) - Number(currentLiabilities.value) + Number(shorttermDebt.value);
}

function computeCurrentLiabilities() {
  return Number(totalAssets.value) - Number(intangibleAssets.value) - (Number(assetCoverageRatio.value) * Number(totalDebtObligations.value)) + Number(shorttermDebt.value);
}

function computeShorttermDebt() {
  return (Number(assetCoverageRatio.value) * Number(totalDebtObligations.value)) - Number(totalAssets.value) + Number(intangibleAssets.value) + Number(currentLiabilities.value);
}

function computeTotalDebtObligations() {
  return (Number(totalAssets.value) - Number(intangibleAssets.value) - Number(currentLiabilities.value) + Number(shorttermDebt.value)) / Number(assetCoverageRatio.value);
}