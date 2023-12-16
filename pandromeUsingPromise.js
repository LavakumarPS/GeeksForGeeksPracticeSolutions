const palindrome = (number) => {
    const promise = new Promise((resolve, reject)=>{
        if(typeof number!= `number`){
            reject(new Error("Argument number is expected"));
        }
        let sum = 0,rem,temp=number;                     
        while(number!=0){
           rem = number%10;
           sum = (sum * 10) + rem;
          number = Math.floor(number/10);
    }
      if(sum == temp) {
        resolve("Number is Palindrome");
      }
      else {
      reject("It is not a palindrome");
      }
    });
        return promise;
}

palindrome(122).then(value => {
  console.log("Success :" +value);
} ,reason => {
  console.log("Failed : "+reason);
})
