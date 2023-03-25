export function formatAsUSD(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number);
  }
  
  export function unformatUSD(value) {
    return parseFloat(value.replace(/[^0-9.]/g, '')); // Reject any non-digit input.
  }