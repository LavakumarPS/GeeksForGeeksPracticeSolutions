class Solution {
    check(s){
       //code here
       for(let i=0;i<s.length;i++){
           if(s[i]!==s[0]){
               return false;
           }
           
       }
       return true;
       
    }
}
