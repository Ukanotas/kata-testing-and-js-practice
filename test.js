/*

function autoAsys(ratukiekis) {
    let asiukiekis = 1;
    let darNepanaudotuRatuKiekis = ratukiekis - 2;

    if (darNepanaudotuRatuKiekis === 2) {
        asiukiekis++;
    } else {
        asiukiekis = asiukiekis + darNepanaudotuRatuKiekis / 4;
        return asiukiekis;
    }
}

console.log(autoAsys(4));
console.log(autoAsys(6));
console.log(autoAsys(8));



//pirma asis - 2 ratai
//antra asis - 4 ratai
//trecia asis - 4 ratai



//kiek tilps appsu?
const appSize = [8, 40, 6, 1, 40, 9, 9, 1];
const phoneMemSize = 70;

function kiekTilpsAppsu(appSize, phoneMemSize) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= appSize.length; i++) {
        sum = sum + appSize [i];
        if (sum <= phoneMemSize) {
            count++;
        }
    }
    return count;
}

const phoneAppCount = kiekTilpsAppsu(phoneMemSize, appSize);
console.log(phoneAppCount);


function disemvowel(str) {
    str.split('');
    return str.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '');
    //return str.join('');
}

*/



function disemvowel(str) {
    let result = str.replace(/[aeiou]/g,'');
    return result;
}
console.log(disemvowel('hello'));