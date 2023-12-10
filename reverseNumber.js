class Solution{
    reverse_digit(n){
        //code here
        let sum =0;
        while(n>0){
            let rem = n % 10;
            sum = (sum * 10) + rem;
            n=Math.floor(n/10);
        }
        return sum;
    }
}
