import { BaseService } from "./BaseServices";

export class UserServices extends BaseService {
    postUserLogin = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, user)
    }

    postUserSignIn = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, user)
    }

    // checkTicketsUser = user => {
    //     return Axios({
    //         url: `${DOMAIN_CYBER}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
    //         method: 'POST',
    //         data: user,
    //         // headers: {
    //         //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN_CYBER)),
    //         //     'TokenCybersoft': API_TOKEN
    //         // }
    //     })
    // }

    checkTicketsUser = user => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan', user)
    }
}

export const userServices = new UserServices()