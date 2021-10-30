export default class User {
    public email: string;
    public password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }

    get userEmail() {
        return this.email
    }

    get userPassword() {
        return this.password
    }

    set userEmail(email: string) {
        this.email = email;
    }

    set userPassword(password: string) {
        this.password = password;
    }
}