export default function validateEmail(email){
    return (/^[a-zA-Z0-9+_.-]+@successive.tech+$/.test(email))
}
