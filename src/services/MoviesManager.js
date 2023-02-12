import { BaseService } from "./BaseServices";

export class MoviesManager extends BaseService {
    getListBanners = (maNhom) => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
    }
    getListMovies = (maNhom) => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
    }
}

export const moviesManager = new MoviesManager()