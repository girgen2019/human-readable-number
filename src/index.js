module.exports = function toReadable(number) {
    const readableNumbers = {
        1: ('one'),
        2: ('two'),
        3: ('three'),
        4: ('four'),
        5: ('five'),
        6: ('six'),
        7: ('seven'),
        8: ('eight'),
        9: ('nine'),
        0: ('zero')
    };

    const getTopTen = (num) => {
        switch (num) {
            case 0:
                return 'ten';
            case 1:
                return 'eleven';
            case 2:
                return 'twelve';
            case 3:
                return 'thirteen';
            case 5:
                return 'fifteen';
            case 8:
                return 'eighteen';
            default:
                return readableNumbers[num] + ('teen');
        }
    };

    const getDoubleDigit = (num) => {
        switch (num) {
            case 2:
                return ('twenty');
            case 3:
                return ('thirty');
            case 4:
                return ('forty');
            case 5:
                return ('fifty');
            case 8:
                return ('eighty');
            default:
                return readableNumbers[num] + ('ty');
        }
    };


    const getHundreds = (num) => readableNumbers[num] + (' hundred');
    const numberArray = String(number).split('').reverse();
    const result = numberArray.reduce((result, value, key) => {
        switch (true) {

            case key === 1 && value === ('1'):
                result[0] = getTopTen(Number(numberArray[0]));
                break;
            case key === 2:
                result.push(getHundreds(+value));
                break;
            case key === 1 && +value > 1:
                result[0] = numberArray[0] === ('0')
                    ? getDoubleDigit(+value)
                    : getDoubleDigit(+value) + ' ' + readableNumbers[Number(numberArray[0])];
                break;
            case key === 0 && numberArray.length === 1:
            case key === 0 && numberArray.length > 1 && value !== ('0'):
                result.push(readableNumbers[+value]);
        }

        return result;
    }, []);

    return result.reverse().join(' ');
};


