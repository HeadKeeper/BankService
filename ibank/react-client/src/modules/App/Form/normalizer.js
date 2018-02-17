export const normalizePhone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) return onlyNums;

  if (onlyNums.length <= 7)
    return `${onlyNums.slice(0, 3)}(${onlyNums.slice(3, 5)})${onlyNums.slice(5)}`;

  if (onlyNums.length <= 9)
    return `${onlyNums.slice(0, 3)}(${onlyNums.slice(3, 5)})${onlyNums.slice(5, 8)}-${onlyNums.slice(8, 10)}`;

  return `${onlyNums.slice(0, 3)}(${onlyNums.slice(3, 5)})${onlyNums.slice(5, 8)}-${onlyNums.slice(8, 10)}-${onlyNums.slice(10, 12)}`
};

export const normalizePassportSeries = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^A-Z]/g, '');

  return `${onlyNums.slice(0, 2)}`
};

export const normalizePassportNumber = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');

  return `${onlyNums.slice(0, 7)}`
};

export const normalizePassportIdentityNumber = (value) => {
  if (!value) return value;
  let onlyNums = value;

  if (onlyNums.length <= 7) {
    return onlyNums.replace(/[^\d]/g, '');
  }

  if (onlyNums.length <= 8) {
    return onlyNums.slice(0, 7) +
           onlyNums.slice(7, 8).replace(/[^A-Z]/g, '');
  }

  if (onlyNums.length <= 11) {
    return onlyNums.slice(0, 7) +
           onlyNums.slice(7, 8).replace(/[^A-Z]/g, '') +
           onlyNums.slice(8, 11).replace(/[^\d]/g, '');
  }

  if (onlyNums.length <= 13) {
    return onlyNums.slice(0, 7) +
           onlyNums.slice(7, 8).replace(/[^A-Z]/g, '') +
           onlyNums.slice(8, 11).replace(/[^\d]/g, '') +
           onlyNums.slice(11, 13).replace(/[^A-Z]/g, '');
  }

  return onlyNums.slice(0, 7) +
         onlyNums.slice(7, 8).replace(/[^A-Z]/g, '') +
         onlyNums.slice(8, 11).replace(/[^\d]/g, '') +
         onlyNums.slice(11, 13).replace(/[^A-Z]/g, '') +
         onlyNums.slice(13, 14).replace(/[^\d]/g, '');
};


