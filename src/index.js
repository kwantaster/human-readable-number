module.exports = function toReadable (number) {
    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 
                'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const c = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const d = ['hundred ', 'thousand ', 'million ', 'billion ', 'trillion '];

    let  number3 = number.toString().split(/(?=(?:\d{3})+$)/);
    number3[0] = ((number3[0].length == 1) ? '00' : (number3[0].length == 2) ? '0' : '') + number3[0];

    const length3 = number3.length;
    let res = '';
    if (number == 0) {
        return 'zero';
    } else {
        for (let i = 0; i < length3; i++) {
            let num = number3[i].split('');
            res += (a[Number(num[0])]) + ((num[0] == '0') ? '' : d[0])
                + ((num[1] == '1' ) ? a[Number(num[1] + num[2])] : (c[Number(num[1])] + a[Number(num[2])])) 
                + ((i == (length3 - 1)) ? '' : d[length3 - 1 - i]);
        }
    } 
    return res.slice(0,res.length - 1);
}
