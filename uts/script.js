const univName = document.getElementById("univ-name");

if (window.innerWidth <= 425) {
    univName.style.marginTop = "-10rem";
    univName.style.marginTop = 0;
} else {
    univName.style.marginLeft = "-10rem";
    univName.style.marginLeft = 0;
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const statsVal = document.querySelectorAll(".stats-val");
let isAnimateStats = [];

window.addEventListener(
    "scroll",
    function () {
        statsVal.forEach(function (elem, i) {
            var vwTop = window.scrollY;
            var vwBottom = window.scrollY + window.innerHeight;
            var elemTop = elem.offsetTop;
            var elemHeight = elem.offsetHeight;

            if (vwBottom > elemTop && vwTop - elemHeight < elemTop) {
                if (isAnimateStats[i]) return;
                animateValue(elem, 0, elem.dataset.val, 2000);
                isAnimateStats[i] = true;
            } else {
                isAnimateStats[i] = false;
            }
        });
    },
    false
);

const dataBerita = [
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/Sejarah-Baru-Bagi-UNRI-8-Mahasiswa-Lolos-Program-Bergengsi-Indonesian-International-Student-Mobility-Awards-IISMA-400x245.gif",
        date: "March 22, 2024",
        title: "Sejarah Baru Bagi UNRI, 8 Mahasiswa Lolos Program Bergengsi Indonesian International Student Mobility Awards (IISMA)",
        link: "https://unri.ac.id/sejarah-baru-bagi-unri-8-mahasiswa-lolos-program-bergengsi-indonesian-international-student-mobility-awards-iisma/",
    },
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/Berkunjung-ke-UNRI-BI-Riau-Sampaikan-Beasiswa-400x245.gif",
        date: "March 21, 2024",
        title: "Berkunjung ke UNRI, BI Riau Sampaikan Beasiswa",
        link: "https://unri.ac.id/berkunjung-ke-unri-bi-riau-sampaikan-beasiswa/",
    },
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/UNRI-Jalin-Kerja-Sama-dengan-Kadin-Dumai-400x245.jpg",
        date: "March 20, 2024",
        title: "UNRI Jalin Kerja Sama dengan Kadin Dumai",
        link: "https://unri.ac.id/unri-jalin-kerja-sama-dengan-kadin-dumai/",
    },
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/Rektor-UNRI-Jadi-Saksi-Pelantikan-PJ-Sekda-Provinsi-Riau-400x245.gif",
        date: "March 19, 2024",
        title: "Rektor UNRI Jadi Saksi Pelantikan PJ. Sekda Provinsi Riau",
        link: "https://unri.ac.id/rektor-unri-jadi-saksi-pelantikan-pj-sekda-provinsi-riau/",
    },
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/Optimalisasi-Program-Kerja-Bidang-Akademis-dan-Kemahasiswaan-Untuk-Akselerasi-Capaian-Kinerja-Tahun-2025-400x245.jpg",
        date: "March 18, 2024",
        title: "Optimalisasi Program Kerja Bidang Akademis dan Kemahasiswaan Untuk Akselerasi Capaian Kinerja Tahun 2025",
        link: "https://unri.ac.id/optimalisasi-program-kerja-bidang-akademis-dan-kemahasiswaan-untuk-akselerasi-capaian-kinerja-tahun-2025/",
    },
    {
        img: "https://unri.ac.id/wp-content/uploads/2024/03/INNOVASI-TIM-PROMEEG-UNIVERSITAS-RIAU-RAIH-RUNNER-UP-CARBON-NEUTRAL-SOLUTION-ANUGRAH-INNOVILLAGE-2023-400x245.jpg",
        date: "March 18, 2024",
        title: "INOVASI TIM PROMEEG UNIVERSITAS RIAU RAIH RUNNER UP CARBON NEUTRAL SOLUTION ANUGRAH INNOVILLAGE 2023",
        link: "https://unri.ac.id/innovasi-tim-promeeg-universitas-riau-raih-runner-up-carbon-neutral-solution-anugrah-innovillage-2023/",
    },
    {
        date: "January 31, 2024",
        title: "Hasil Evaluasi Daya Tampung Program Studi Yang Terdeteksi Kenaikan Anomali",
        link: "https://unri.ac.id/hasil-evaluasi-daya-tampung-program-studi-yang-terdeteksi-kenaikan-anomali/",
    },
    {
        date: "January 3, 2024",
        title: "Pembayaran UKT/SPP Semester Genap tahun Akademik 2024/2024",
        link: "https://unri.ac.id/pembayaran-ukt-spp-semester-genap-tahun-akademik-2024-2024/",
    },
    {
        date: "December 28, 2023",
        title: "Pengajuan Revisi UKT Mahasiswa Angkatan 2023 Pemegang KIP Kuliah yang Tidak Termasuk Penerima Beasiswa KIP Kuliah",
        link: "https://unri.ac.id/pengajuan-revisi-ukt-mahasiswa-angkatan-2023-pemegang-kip-kuliah-yang-tidak-termasuk-penerima-beasiswa-kip-kuliah/",
    },
    {
        date: "December 24, 2023",
        title: "Hasil Akhir Seleksi (Kelulusan) PPPK Kebutuhan Tenaga Teknis dan Tenaga Kesehatan Kemdikbudristek TA 2023",
        link: "https://unri.ac.id/hasil-akhir-seleksi-kelulusan-pppk-kebutuhan-tenaga-teknis-dan-tenaga-kesehatan-kemdikbudristek-ta-2023/",
    },
    {
        date: "November 24, 2023",
        title: "Hasil SKD CPNS Kemdikbudristek TA 2023",
        link: "https://unri.ac.id/hasil-skd-cpns-kemdikbudristek-ta-2023/",
    },
    {
        date: "October 12, 2023",
        title: "Pengajuan Revisi UKT Semester Genap Tahun 2023/2024",
        link: "https://unri.ac.id/pengajuan-revisi-ukt-semester-genap-tahun-2023-2024/",
    },
];

let cols = 0;
let beritaCards = `<div class="row">`;
dataBerita.forEach((d) => {
    if (d.img) {
        beritaCards += `<div class="col-12 col-md-4">
    <div class="berita-card">
        <a href="${d.link}">
            <img
                src="${d.img}"
                alt="Item"
            />
        </a>
        <a href="${d.link}">
            <h3>
            ${d.title}
            </h3>
        </a>
        <hr />
        <a href="${d.link}">
            <p>
                ${d.date}
            </p>
        </a>
    </div>
</div>
`;
        cols++;
        if (cols >= 3) {
            beritaCards += `</div>
<div class="row">`;
            cols = 0;
        }
    }
});
beritaCards += `</div>
<div class="see-all-div">
    <a href="https://unri.ac.id/category/berita/" class="see-all">More</a>
</div>`;
document.querySelector("main .berita").innerHTML += beritaCards;

let pengumumanCards = ``;
dataBerita.forEach((d) => {
    if (!d.img) {
        pengumumanCards += `<div class="row">
<div class="col-12">
    <div class="pengumuman-card">
        <a href="${d.link}"><p>${d.date}</p></a>
        <a href="${d.link}"
            ><h3>
            ${d.title}
            </h3></a
        >
    </div>
</div>
</div>
`;
    }
});
pengumumanCards += `<div class="see-all-div">
    <a href="https://unri.ac.id/category/pengumuman/" class="see-all">More</a>
</div>`;
document.querySelector("main .pengumuman").innerHTML += pengumumanCards;

const dataProgram = [
    {
        title: "PROGRAM SARJANA",
        text: "Program sarjana bisa diikuti oleh lulusan SMA/SMK/MA/MAK, mempunyai beban studi 144-160 sks dan dapat ditempuh dalam waktu 8-14 semester.",
    },
    {
        title: "PROGRAM PASCASARJANA",
        text: "UNRI menawarkan program studi lanjutan di tingkat S2 dan S3 yang diselenggarakan di fakultas serta sekolah Pascasarjana.",
    },
    {
        title: "PROGRAM PROFESI",
        text: "Program profesi diperuntukkan sebagai bagi lulusan program studi tertentu sebagai syarat untuk mendapatkan gelar keprofesian.",
    },
];

let programCards = `<div class="row">`;
dataProgram.forEach((d, i) => {
    programCards += `<div class="col-12 col-md-4">
    <div class="program-items">
        <img src="img/icon3/${i + 1}.png" alt="icon" />
        <h4>${d.title}</h4>
        <p>${d.text}</p>
        <a href="https://um.unri.ac.id/umx/">Baca Selengkapnya</a>
    </div>
</div>
`;
});
programCards += `</div>`;
document.querySelector("main .program").innerHTML += programCards;

const dataOthers = [
    "https://ppid.unri.ac.id/",
    "https://www.lapor.go.id/",
    "https://wbs.kemdikbud.go.id/",
    "https://unri.ac.id/#",
    "https://satgasppks.unri.ac.id/",
];

let othersCards = ``;
dataOthers.forEach((d, i) => {
    othersCards += `<div class="others-item">
    <a href="${d}">
        <img src="img/elemen/${i + 1}.${i == 4 ? "jpeg" : "png"}" alt="icon" />
    </a>
</div>
`;
});
document.querySelector("main .others").innerHTML += othersCards;

const dataLinks = [
    { link: "https://portal.unri.ac.id/", text: "Portal" },
    {
        link: "https://unri.ac.id/wp-content/uploads/2023/10/20230727_Kalender-Akdemik-2023-2024.pdf",
        text: "Kalender Akademik",
    },
    { link: "https://mail.unri.ac.id/", text: "Webmail" },
    { link: "https://staff.unri.ac.id/", text: "Blog Staff" },
    { link: "https://unri.ac.id/dokumen/", text: "Dokumen" },
    { link: "https://unri.ac.id/#", text: "Prestasi" },
    { link: "https://ppid.unri.ac.id/", text: "PPID" },
    { link: "https://unri.ac.id/pkkmb/", text: "PKKMB" },
];

let linksCards = ``;
dataLinks.forEach((d, i) => {
    linksCards += `<a href="${d.link}">
        ${d.text}
    </a>
`;
});
document.querySelector("#links").innerHTML += linksCards;
