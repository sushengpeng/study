export interface UserState {
    userInfo: null | UserInfo,
    userName: string,
    token: string,
    roles: Array<string>,
    verifyCode: string
}
