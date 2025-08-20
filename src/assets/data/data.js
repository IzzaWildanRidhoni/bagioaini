export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Bagio',
            child: 'Putra ke 4',
            father: 'Wahyudi Sutopo',
            mother: 'Jumilah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Aini',
            child: 'Putri',
            father: 'Khoirun',
            mother: 'Nuryati (Alm)',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Agustus',
            date: '30',
            day: 'Sabtu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Agustus',
            date: '31',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        address: 'Kemloko, Bumiayu, Selopampang, Temanggung'
    },

    link: {
        calendar: 'https://calendar.app.google/NpMKNcWP2CHiv3z86',
        map: 'https://maps.app.goo.gl/qwmp5CMEEcu82rBp8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    // api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',
    api: 'https://script.google.com/macros/s/AKfycbxGKA05MxoBLldLR7a7MVw4-ySA5O9kF04nTyfZw65e1iFjPWOlhwI-B13XUbH8FkB9/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
