class Solution {

    isPerfectNumber(n){
        //code here
        let sum = 1;
        for(let i=2;i*i<=n;i++){
            if(n%i==0){
                if(i*i!=n){
                    sum = sum + i +n/i
                }
                else
                {
                    sum = sum + i;
                }
            }
        }
        if(sum == n && n!=1){
            return 1
        }
        else{
            return 0
        }
    }
}
