function equilateral_triangle(rows){
    let s = "";
    let j = rows;
    for(let i =1;i<=rows;i++){
        s = " ".repeat(j);
        console.log(s,"* ".repeat(i));
        s = "";
        j--;
    }
}

equilateral_triangle(process.argv[2])