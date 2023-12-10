class Solution{
    transform(s){
        //code here
        s=s.split('');
        s[0]=s[0].toUpperCase();
      for(let i=0;i<=s.length;i++){
          if(s[i-1]===' '){
              s[i]=s[i].toUpperCase();
          }
      }
      return s.join('');
    }
}
