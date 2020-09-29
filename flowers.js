/* 
TURIM GELIU SODA
plotas: 20 kv. m
pradinis geliu uzimamas plotas: 1 kv m.
geliu dauginimosi greitis: 1 (kasmet po 1 vaika)

per kiek metu pasidengs visa teritorija gelemis?
*/

function flowers(sodoPlotas, geliuPlotas, greitis) {
    let plotas = geliuPlotas;
    let metai = 1;
    while (plotas < sodoPlotas) {
        plotas = plotas + plotas * greitis;
        metai++;
    }
    return metai;
}

console.log(flowers(20, 1, 1));