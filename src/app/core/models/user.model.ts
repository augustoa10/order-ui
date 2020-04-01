interface UserAttributes {
    email?: string;
    id?: number;
    name?: string;
    cpf?: string;
}

export class User implements UserAttributes {
    email?: string;
    id?: number;
    name?: string;
    cpf?: string;

    constructor({
        email,
        id,
        name,
        cpf
    }: UserAttributes = {}) {
        this.email = email;
        this.id = id;
        this.name = name;
        this.cpf = cpf;
    }

    attributes(): UserAttributes {
        return {
            email: this.email,
            id: this.id,
            name: this.name,
            cpf: this.cpf,
        };
    }

    isPersisted(): boolean {
        return !!this.id;
    }
}
