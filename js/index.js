    let value1;
    let value2;
    let result;

    do {
        value1 = prompt('Enter first value');
    } while ( isNaN(value1) );

    do {
        value2 = prompt('Enter second value');
    } while ( isNaN(value2) );

    const convertedData1 = Number(value1)
    const convertedData2 = Number(value2)

    result = (convertedData1 + convertedData2);
    alert(`${convertedData1} + ${convertedData2} = ${result}`);

    result = (convertedData1 - convertedData2);
    alert(`${convertedData1} - ${convertedData2} = ${result}`);

    result = (convertedData1 * convertedData2);
    alert(`${convertedData1} * ${convertedData2} = ${result}`);

    result = (convertedData1 / convertedData2);
    alert(`${convertedData1} / ${convertedData2} = ${result}`);