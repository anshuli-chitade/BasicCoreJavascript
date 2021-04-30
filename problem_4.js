
var N =  prompt("enter a value");

if(N<31)
{
    for(i=1;i<=N;i++)
    {
        var a= Math.pow(2,i);
        console.log("2^" +i+ " is " +a+ " ");
    }
}else
{
    console.log("value entered should be less than 31");
        
}
    