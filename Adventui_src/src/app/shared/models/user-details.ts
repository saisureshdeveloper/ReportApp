import { UserRole } from '../enums/user-roles.enum';

export interface UserDetails {
    Id: number;
    Name: string;
    Role: UserRole;
    Module: string;
}
