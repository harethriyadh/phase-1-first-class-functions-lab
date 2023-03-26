let array = ['Antonia', 'Nuru', 'Amari', 'Mo'] ;
function returnFirstTwoDrivers(array) {

    let newArray = [array[0], array[1]] ;

    return newArray ;
}

function returnLastTwoDrivers(  ) {
    let newArray = [array[array.length-2], array[array.length-1]] ;

    return newArray ;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier ( variable ) {

    return sdsd => variable * variable ;

}

function fareDoubler ( fars ) {
    return fars*2 ;
}

function fareTripler ( fars ) {
    return fars*3 ;
}

const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
}