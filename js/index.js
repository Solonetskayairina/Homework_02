    // let a= parseInt(prompt("Enter number a"));
    // let b= parseInt(prompt("Enter number b"));
    // let c= 0;
    //
    // c = (a + b);
    // alert(a + '+' + b + '=' + c);
    //
    // c = (a - b);
    // alert(a + '-' + b + '=' + c);
    //
    // c = (a * b);
    // alert(a + '*' + b + '=' + c);
    //
    // c = (a / b);
    // alert(a + '/' + b + '=' + c);

    let a= prompt("Enter number a");
    let b= prompt("Enter number b");
    let c= 0;

    if(isNaN(a)){
        alert('You can only enter numbers');
    }else if (isNaN(b)){
        alert('You can only enter numbers');
    }

    c = (Number(a) + Number(b));
    alert(a + '+' + b + '=' + c);

    c = (Number(a) - Number(b));
    alert(a + '-' + b + '=' + c);

    c = (Number(a) * Number(b));
    alert(a + '*' + b + '=' + c);

    c = (Number(a) / Number(b));
    alert(a + '/' + b + '=' + c);



