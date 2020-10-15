function diamond(rows){
    let s = "";
    let j = rows;
    for(let i =1;i<=rows;i++){
        s = " ".repeat(j);
        console.log(s,"* ".repeat(i));
        s = "";
        j--;
    }
    j = 1;
    for(i = rows;i >= 1;i--){
        s = " ".repeat(j);
        console.log(s,"* ".repeat(i));
        s = "";
        j++;
    }
}

diamond(process.argv[2])