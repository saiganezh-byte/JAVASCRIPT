
//program to find the factorial of a number using for loop
let number = 5;
let factorial = 1;
for(let i=1;i<=number;i++){
    factorial*=i;
};
console.log(factorial);

//program to find the fibonacci series upto n elememts
function fibonacci(num){
    if(num<2){
        return num;
    }else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
};
let number = 10;
if(number<=0){
    console.log("please enter a positive integer");
}else{
    for(let i=0;i<number;i++){
        console.log(fibonacci(i));
    }
};

//program to find the fibonacci series upto n elements using for loop
let number = 10;
let n1 = 0;
let n2 = 1;
let nextterm;
for(let i=0;i<number;i++){
    console.log(n1);
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;
}

//program to find the hcf of two numbers
let first_number = 60;
let second_number = 72;
let hcf;
for(let number=1;number<first_number;number++){
    if(first_number%number==0&&second_number%number==0){
        hcf=number;
    }
};
console.log(`the hcf of ${first_number} and ${second_number} is ${hcf}`);

//program to find the lcm of two numbers
let first_number = 60;
let second_number = 72;
let hcf;
for(let number=1;number<first_number;number++){
    if(first_number%number==0&&second_number%number==0){
        hcf=number;
    }
};
let lcm = first_number*second_number/hcf;
console.log(`the lcm of ${first_number} and ${second_number} is ${lcm}`);



//program to find the factorial of a given number.
function factorial(num){
    if(num<2){
        return num;
    }else{
        return num*factorial(num-1);
    }
};
let number = 5;
console.log(factorial(number));

//program to convert celsius into fahrenheit
let celsius = 5;
let fahrenheit = (celsius * 1.8) + 32;
console.log(fahrenheit);

//program to check whether the given number is prime or not
let number = 6;
let isprime=true;
if(number<2){
    isprime=false;
    
    
}else{
    for(let i=2;i<=number/2;i++){
        
        if(number%i==0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log("prime number");
    }else{
        console.log("not a prime number");
    }
}

//program to print the prime numbers between the given interval
let first_number=2;
let second_number=20;
let isprime=true;
for(let i=first_number;i<=second_number;i++){
    isprime=true;
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log(i);
    }
}






