export default function equilateral_triangle(rows: number): void {
    console.log('Equilateral triangle:', rows );
    let s: string = '';
    let j: number = rows;
    for (let i: number = 1; i <= rows; i++) {
        s = ' '.repeat(j);
        console.log(s, '* '.repeat(i));
        s = '';
        j--;
    }
}
