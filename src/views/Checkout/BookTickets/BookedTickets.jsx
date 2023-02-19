import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import { getListMovies } from '../../../features/movies/moviesAction'



export default function BookedTickets(props) {
    const ticketList = props.userInfo?.thongTinDatVe
    const { listMovies } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListMovies('GP03'))
    }, [])

    const getIdMovie = (name) => {
        let idFilm = ""
        // console.log(listMovies)
        let film = listMovies.arrayMovie.find(item => {
            return item.tenPhim === name
        });
        if (film) {
            // console.log(film)
            idFilm = `/movie/${film.maPhim}`
        } else {
            // console.log(film)
            idFilm = `/history-booking`
        }
        return idFilm;
    }
    const renderTicketBooking = (ticketList) => {
        if (ticketList?.length) {
            let arrayTickets = [...ticketList].reverse()
            return arrayTickets.map((ticket, index) => {
                // getIdMovie(ticket.tenPhim)
                let cost = ticket.giaVe * ticket.danhSachGhe.length
                return (
                    <div className="p-2 md:w-1/2 w-full" key={index}>
                        <div className="h-full flex flex-col lg:flex-row gap-5 justify-center border-gray-800 border p-4 rounded-lg backdrop-ticket">
                            <div className="img lg:h-350 lg:max-w-2/5 lg:basis-[40%] basis-[100%] max-w-full">
                                <img alt="movie" className="w-full h-full bg-gray-100 object-cover object-center flex-shrink-0 mr-4" src={ticket.hinhAnh} />
                            </div>
                            <div className="lg:max-w-3/5 lg:basis-[60%] basis-[100%] max-w-full">
                                <div className="id-ticket mb-2">
                                    <span className="text-orange-main text-lg">Ticket ID:  </span>
                                    <span className="text-orange-main text-xl font-bold">{ticket.maVe}</span>
                                </div>
                                <div className="name mb-2">
                                    <NavLink exact to={`${getIdMovie(ticket.tenPhim)}`}> <h2 className="text-white text-2xl font-bold mb-2 hover:text-yellow-400">{ticket.tenPhim}</h2></NavLink>
                                </div>
                                <div className="time-book mb-2">
                                    <span className='text-gray-200 text-base'>Date: </span>
                                    <p className="text-white font-bold text-lg">{moment(ticket.ngayDat).format('hh:mm A - DD/MM/YYYY')}</p>
                                </div>
                                <div className="time-book mb-2">
                                    <span className='text-gray-200 text-base'>Pricing: </span>
                                    <p className="text-white font-bold text-lg">{cost.toLocaleString()} VNĐ</p>
                                </div>
                                <div className="cinema-book mb-2">
                                    <p className='text-gray-200 text-base'>Cinema: </p>
                                    <span className="text-white font-bold text-lg">{ticket.danhSachGhe[0].tenHeThongRap}</span>
                                    <span className='text-yellow-200 text-bold text-lg'> - {ticket.danhSachGhe[0].tenCumRap}</span>
                                </div>
                                <div className="seats">
                                    <p className='text-gray-200 text-base'>SEATS: </p>
                                    <div className="list  grid grid-cols-6 gap-3">
                                        {_.sortBy(ticket.danhSachGhe, 'tenGhe').map((seat, index) => {
                                            return <Fragment key={index}>
                                                <h4 className='text-xl text-green-400 font-bold'>{seat.tenGhe}</h4>
                                            </Fragment>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            })
        } else {
            return <>
                <div className="text-orange-main text-2xl font-bold">BẠN CHƯA ĐẶT PHIM</div>
            </>
        }
    }


    return (
        <>
            <section className="container text-gray-400 body-font">
                <div className="py-5 mx-auto min-h-20vh">
                    <div className="flex flex-row flex-wrap -m-2">
                        {renderTicketBooking(ticketList)}
                    </div>
                </div>
            </section>

        </>
    )
}
