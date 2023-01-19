const numberUtils = {};

const toCountingNumber = (number) => {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('The argument must be a number');
    }

    var oneThousand = 1000;
    var oneLac = 100 * oneThousand;
    var oneMillion = 10 * oneLac;
    var oneBillion = 1000 * oneMillion;
    var oneTrillion = 1000 * oneBillion;

    if (number < oneThousand) {
        return number.toString();
    }

    if (number < oneLac) {
        return (number / oneThousand).toFixed(1) + 'K';
    }

    if (number < oneMillion) {
        return (number / oneLac).toFixed(1) + 'L';
    }

    if (number < oneBillion) {
        return (number / oneMillion).toFixed(1) + 'M';
    }

    if (number < oneTrillion) {
        return (number / oneBillion).toFixed(1) + 'B';
    }

    return (number / oneTrillion).toFixed(1) + 'T';
};

numberUtils.toCountingNumber = toCountingNumber;

export default numberUtils;
