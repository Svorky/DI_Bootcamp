import bcrypt from 'bcrypt';
export function hashMyPassword(password){
    return bcrypt.hash(password, 10)
}