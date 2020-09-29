module.exports = function toReadable (number) {
  let numberStr = number.toString(),
      numberArr = numberStr.split(''),
      reStr = '',
      resultStr = '';

    for (let i = 0; i < numberArr.length; i++){
        if (numberArr.length == 3 && i == 0) {
            switch (numberArr[0]){
                case '0':
                    reStr = `zero hundred`;
                    break;
                case '1':
                    reStr = `one hundred`;
                    break;
                case '2':
                    reStr = `two hundred`;
                    break;
                case '3':
                    reStr = `three hundred`;
                    break;
                case '4':
                    reStr = `four hundred`;
                    break;
                case '5':
                    reStr = `five hundred`;
                    break;
                case '6':
                    reStr = `six hundred`;
                    break;
                case '7':
                    reStr = `seven hundred`;
                    break;
                case '8':
                    reStr = `eight hundred`;
                    break;
                case '9':
                    reStr = `nine hundred`;
                    break;
            };
        } else if ((i == numberArr.length - 2) && (numberArr[i] == 0)) {
            switch (numberArr[i]){
                case '0':
                    break;
            };
        } else if ((i == numberArr.length - 2) && (numberArr[i] == 1)) {
            switch (numberArr[i + 1]){
                case '0':
                    reStr = `${reStr} ten`;
                    break;
                case '1':
                    reStr = `${reStr} eleven`;
                    break;
                case '2':
                    reStr = `${reStr} twelve`;
                    break;
                case '3':
                    reStr = `${reStr} thirteen`;
                    break;
                case '4':
                    reStr = `${reStr} fourteen`;
                    break;
                case '5':
                    reStr = `${reStr} fifteen`;
                    break;
                case '6':
                    reStr = `${reStr} sixteen`;
                    break;
                case '7':
                    reStr = `${reStr} seventeen`;
                    break;
                case '8':
                    reStr = `${reStr} eighteen`;
                    break;
                case '9':
                    reStr = `${reStr} nineteen`;
                    break;
            };
            if (reStr[0] == ' '){
                resultStr = reStr.slice(1);
            } else {
                resultStr = reStr;
            };
            return resultStr;
        } else if (i == numberArr.length - 2){
            switch (numberArr[i]){
                case '1':
                    reStr = `${reStr}`;
                    break;
                case '2':
                    reStr = `${reStr} twenty`;
                    break;
                case '3':
                    reStr = `${reStr} thirty`;
                    break;
                case '4':
                    reStr = `${reStr} forty`;
                    break;
                case '5':
                    reStr = `${reStr} fifty`;
                    break;
                case '6':
                    reStr = `${reStr} sixty`;
                    break;
                case '7':
                    reStr = `${reStr} seventy`;
                    break;
                case '8':
                    reStr = `${reStr} eighty`;
                    break;
                case '9':
                    reStr = `${reStr} ninety`;
                    break;
            };

        } else if (numberArr.length == 1 && numberArr[i] == 0) {
            reStr = `zero`;
        } else {
            switch (numberArr[i]){
                case '0':
                    reStr = `${reStr}`;
                    break;
                case '1':
                    reStr = `${reStr} one`;
                    break;
                case '2':
                    reStr = `${reStr} two`;
                    break;
                case '3':
                    reStr = `${reStr} three`;
                    break;
                case '4':
                    reStr = `${reStr} four`;
                    break;
                case '5':
                    reStr = `${reStr} five`;
                    break;
                case '6':
                    reStr = `${reStr} six`;
                    break;
                case '7':
                    reStr = `${reStr} seven`;
                    break;
                case '8':
                    reStr = `${reStr} eight`;
                    break;
                case '9':
                    reStr = `${reStr} nine`;
                    break;
            };
        };
    };
    if (reStr[0] == ' '){
        resultStr = reStr.slice(1);
    } else {
        resultStr = reStr;
    };

    return resultStr;
}
