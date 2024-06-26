import React from 'react';
import Paper from './Paper';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/AuthProviders';
import useFetchData from '../hooks/useFetchData';
import LogoETD2 from '../assets/images/logoETD2.jpg';

const tempahDewan = [
    {
        id: 1,
        Nama: "Kamal",
        Dewan: "Dewan Lestari",
        Tarikh: "29/04/2024",
        Status: "Ditempah",
        Email: "kamal@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 2,
        Nama: "Afif",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "07/05/2024",
        Status: "Ditempah",
        Email: "afif@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 3,
        Nama: "Zikri",
        Dewan: "Dewan Lestari",
        Tarikh: "20/05/2024",
        Status: "Disahkan",
        Email: "zikri@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 4,
        Nama: "Syauqi",
        Dewan: "Dewan Lestari",
        Tarikh: "15/05/2024",
        Status: "Disahkan",
        Email: "syauqi@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 5,
        Nama: "Adam",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "20/06/2024",
        Status: "Ditempah",
        Email: "adam@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 6,
        Nama: "Yusuf",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "30/04/2024",
        Status: "Ditolak",
        Email: "yusuf@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 1,
        Nama: "Kamal",
        Dewan: "Dewan Lestari",
        Tarikh: "29/04/2024",
        Status: "Ditempah",
        Email: "kamal@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 2,
        Nama: "Afif",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "07/05/2024",
        Status: "Ditempah",
        Email: "afif@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 3,
        Nama: "Zikri",
        Dewan: "Dewan Lestari",
        Tarikh: "20/05/2024",
        Status: "Disahkan",
        Email: "zikri@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 4,
        Nama: "Syauqi",
        Dewan: "Dewan Lestari",
        Tarikh: "15/05/2024",
        Status: "Disahkan",
        Email: "syauqi@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 5,
        Nama: "Adam",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "20/06/2024",
        Status: "Ditempah",
        Email: "adam@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 6,
        Nama: "Yusuf",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "30/04/2024",
        Status: "Ditolak",
        Email: "yusuf@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
]

const DashboardMain = () => {
    // const { data, loading, error } = useFetchData('http://localhost:8080/api/orderdisplay');
    const { role } = useAuth();
    return (
        <>
        {role == 1 ? (
            <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-4">
                    <Paper titleDewan="Tempahan" custom={["p-10 bg-slate-100"]} customTitle={["text-2xl pb-0"]} titleBool={true}>
                        <div className='divider m-0 p-0'/>
                        <h1>12</h1>
                        <p>Tempahan baru</p>
                    </Paper>
                </div>
                <div className="col-span-12 sm:col-span-4">
                    <Paper titleDewan="Disahkan" custom={["p-10 bg-slate-100"]} customTitle={["text-2xl pb-0"]} titleBool={true}>
                        <div className='divider m-0 p-0'/>
                        <h1>31</h1>
                        <p>Tempahan disahkan</p>
                    </Paper>
                </div>
                <div className="col-span-12 sm:col-span-4">
                    <Paper titleDewan="Ditolak" custom={["p-10 bg-slate-100"]} customTitle={["text-2xl pb-0"]} titleBool={true}>
                        <div className='divider m-0 p-0'/>
                        <h1>5</h1>
                        <p>Tempahan ditolak</p>
                    </Paper>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
            <div className='col-span-12'>
            <Paper titleDewan="Tempahan Terbaru" custom={["px-10 pt-10 pb-5 my-3 bg-slate-100"]} customTitle={["text-xl"]} titleBool={true}>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="">
                    <tr>
                        <th></th>
                        <th>Nama</th>
                        <th>Dewan</th>
                        <th>Tarikh</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tempahDewan.filter(tempah => tempah.Status === "Ditempah").slice(0,5).map((tempah, index) => (
                        <tr key={index} className="hover">
                            <th>{index + 1}</th>
                            <td>{tempah.Nama}</td>
                            <td>{tempah.Dewan}</td>
                            <td>{tempah.Tarikh}</td>
                            <td>
                            <div className={`badge ${
                                tempah.Status === "Ditempah" ? "badge-warning" :
                                tempah.Status === "Disahkan" ? "badge-success" :
                                "badge-error"
                            }`}>
                                {tempah.Status}
                            </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <Link to="/halaman/senaraitempahan" className="btn btn-ghost text-primary">
                    Lihat Semua Tempahan
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </Paper>
            </div>
            </div>
            </>
        ):(
            <>
            <div className="hero min-h-screen relative overflow-hidden">
            <div
                className="w-full h-full bg-cover"
                style={{
                    backgroundImage: `url(${LogoETD2})`,
                    }}
            ></div>
            <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="hero-content text-center text-neutral-content relative z-10">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">SELAMAT DATANG</h1>
                <p className="mb-5">Sistem untuk tempahan dewan secara atas talian yang disediakan oleh Majlis Daerah Yan.</p>
                <Link to="/halaman/kalendartempahan">
                    <button className="btn glass btn-primary">Tempah Sekarang!!</button>
                </Link>
                </div>
            </div>
            </div>
            </>
        )
        }
        
        </>
    );
}

export default DashboardMain;