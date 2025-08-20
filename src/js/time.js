import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [receptionDiv, marriageDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const addressParagraph = timeContainer.querySelector('a + p');

    const createTimeListItem = (title, details) => {
        let html = `
            <h3>${title}</h3>
            <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
            Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>
        `;

        // tampilkan alamat kalau ada
        if (details.address && details.address.trim() !== "") {
            html += `<p>${details.address}</p>`;
        }

        // tampilkan maps kalau ada
        if (details.maps !== "") {
            html += `
                <a href="${details.maps}" role="link" target="_blank" aria-label="Lihat google maps" 
                   data-aos="zoom-in" data-aos-duration="1000">
                    <i class="bx bxs-map-alt" aria-hidden="true"></i>
                    <span>Lihat google maps</span>
                </a>
            `;
        }

        return html;
    };

    marriageDiv.innerHTML = createTimeListItem('Resepsi', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Akad Nikah', data.time.reception);

    // kalau data.link.map ada, baru set mapLink
    if (data.link.map && data.link.map.trim() !== "") {
        mapLink.href = data.link.map;
    }

    // kalau ada alamat umum, baru set paragraph
    if (data.time.address && data.time.address.trim() !== "") {
        addressParagraph.textContent = data.time.address;
    }
};
