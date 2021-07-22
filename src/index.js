module.exports = function reverse (n) {


if (n<0) {
    n=-(n);
}

    let n1=n%10;

let n10=((n-n1)/10)%10;

let n100=(Math.trunc(n/100))%10;

let n1000=(Math.trunc(n/1000))%10;

let n10000=Math.trunc(n/10000);

let n100000=Math.trunc(n/100000);


if ((n>=1)&&(n<10)) {
  return num
} else if ((n>=10)&&(n<=99)) {
  return (n1*10+n10);
    } else if ((n>=100)&&(n<1000)) {
  return (n1*100+n10*10+n100);
  } else if ((n>=1000)&&(n<10000)) {
    return (n1*1000+n10*100+n100*10+n1000);
  } else if ((n>=10000)&&(n<100000)) {
    return (n1*10000+n10*1000+n100*100+n1000*10+n10000);
  }
  
}
