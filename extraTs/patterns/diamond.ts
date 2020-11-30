export default function diamond(rows: number): void {
    console.log('diamond pattern:', rows);
    let s: string = '';
    let j: number = rows;
    for (let i: number = 1; i <= rows; i++) {
        s = ' '.repeat(j);
        console.log(s, '* '.repeat(i));
        s = '';
        j--;
    }
    j = 1;
    for (let i = rows; i >= 1; i--) {
        s = ' '.repeat(j);
        console.log(s, '* '.repeat(i));
        s = '';
        j++;
    }
}
