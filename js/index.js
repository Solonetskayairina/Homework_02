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

    let a= prompt('Enter number a');

    if(isNaN(a)){
        alert('You can only enter numbers');
        a = prompt('try again')
    }

    let b= prompt('Enter number b');

    if (isNaN(b)){
        alert('You can only enter numbers');
        b = prompt('try again')

    }
    a = Number(a)
    b = Number(b)

    let c;

    c = (a + b);
    alert(a + '+' + b + '=' + c);

    c = (a - b);
    alert(a + '-' + b + '=' + c);

    c = (a * b);
    alert(a + '*' + b + '=' + c);

    c = (a / b);
    alert(a + '/' + b + '=' + c);



