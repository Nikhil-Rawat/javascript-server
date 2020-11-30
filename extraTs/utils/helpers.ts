export default function validateEmail(email: string): boolean {
    return (/^[a-zA-Z0-9+_.-]+@successive.tech+$/.test(email));
}
