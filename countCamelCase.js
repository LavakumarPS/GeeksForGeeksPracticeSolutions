class Solution{
    countCamelCase(s){
        //code here
        let count=0;
        let pattern = /[A-Z]+/;
        for(let i=0;i<s.length;i++){
            if(s[i].match(pattern)){
                count=count+1;
            }
            }
            return count;
        }
    }
