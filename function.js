//      FUCNTION        //

function greetuser(name) {
    //set of statements
    let msg = 'hello ' + name + ' . have a good day !...';
    console.log(msg)
}

greetuser('rock')
greetuser('tom')
greetuser('ria')

function hellouser(fname, lname) {
    //set of statements
    let msg = 'hello ' + fname + " " + lname + ' . have a good day !...';
    console.log(msg)
}
hellouser('lg', 'rock')
hellouser('d',"j")


// using function add , sub , mul , div

// adding

function add(num1,num2){
    console.log(num1+num2);
}
add(5,5)
add(324324,42323)
add(324.32,234.324)

// subtracting

function sub(num1,num2){
    console.log(num1-num2);
}
sub(5,5)
sub(324,323)
sub(213.4234,32.4123)
sub(5,7)

//multiplication

function mul(num1,num2){
    console.log(num1*num2);
}
mul(0,0)
mul(332.1432,0)
mul(21341,2131)

//division

function div(num1,num2){
    console.log(num1/num2);
}
div(0,0)
div(5,0)
div(35,12)
div(5,5)
div(21.324,422)
div(0,5)