class Solution{
    armstrongNumber(n){
        //code here
let sum = 0,rem,temp=n;
while(n!=0){
  rem = n%10;
  sum = sum + (rem*rem*rem); 
  n = Math.floor(n/10);
}

if(sum==temp){
    return "Yes"
}
else {
    return "No"
}
        
        
    }
}
