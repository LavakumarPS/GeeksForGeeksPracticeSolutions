class Solution {
  removeCharacters(s) {
    //code here
   let result ="";
   for(let i=0;i<s.length;i++){
       if(s[i]>=0 && s[i]<=9){
           result=result+s[i];
       }
   }
   return result;
  }
}
