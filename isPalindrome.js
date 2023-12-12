class Solution{
    is_palindrome(n){
        //code here
        let sum=0,rem,temp=n;
        while(n!=0){
            rem = n%10;
            sum = (sum *10) + rem ;
            n=Math.floor(n/10);
        }
        if(temp==sum){
            return "Yes"
        }
        else{
            return "No"
        }
        
        
    }
}
