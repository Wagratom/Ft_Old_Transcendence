abstract class User {
    ID: number;
    name: string;
    email: string;

    nickname: string;
    avatar: string; //trocar aqui para o tipo File
    status_connection: boolean; // podemos colocar um enum aqui para ter mais status de conexão

    history: UserHistory;
    friends: Array<User>;

    created_at: Date;
    updated_at: Date;
    is_active: boolean;
}

abstract class UserHistory {
    wins: number;
    loses: number;
    draws: number;
}