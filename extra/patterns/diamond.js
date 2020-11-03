export default function diamond(rows){
    console.log(`diamond pattern: ${rows}`)
    let s = "";
    let j = rows;
    for(let i =1;i<=rows;i++){
        s = " ".repeat(j);
        console.log(s,"* ".repeat(i));
        s = "";
        j--;
    }
    j = 1;
    for(let i = rows;i >= 1;i--){
        s = " ".repeat(j);
        console.log(s,"* ".repeat(i));
        s = "";
        j++;
    }
}
