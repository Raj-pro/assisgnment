function promptNumbers() {
    let arr=[];
    while (true) {
      let x = prompt('choose the nums');
      if (x === null) {
        break;
      } 
        else{
            let num = Number(x);
            if (!isNaN(num)) {
                arr.push(num);
            }
        }
    }  
    let total=arr.length;
    let sum=0;
    for(let i=0;i<total;i++){
      sum=sum+arr[i];
    }
    let avg =sum/total;
    document.write(avg);
}