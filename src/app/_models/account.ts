﻿import { Role } from './role';

export class Account {
    AccountId?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: Role;
    jwtToken?: string;
}