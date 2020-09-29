/* medvarztis:
ilgis: 15 mm
zingsnis: 1.5 mm
vienas varzto pasukimas: 360 deg
rankos pasukimas: 140 deg

kiek reikia pasukimu pilnai susukti medvarzti?
*/


function screw(ilgis, zingsnis, pasukimas) {
    let KiekPasukimu = 0;
    let kiekLaipsniu = 0;
    pasukimas =  ilgis / zingsnis;
    kiekLaipsniu = pasukimas * 360;
    KiekPasukimu = kiekLaipsniu / 140;
    return KiekPasukimu;
}

console.log(screw(15, 1.5, 140));