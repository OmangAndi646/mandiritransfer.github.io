document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Menambahkan kelas 'show' ke elemen dengan kelas 'wrapper' setelah 10 detik
    setTimeout(() => {
        wrapper.classList.add('show');
    }, 10000); // Delay 10 detik

    yesBtn.addEventListener('click', () => {
        // Mengganti teks pertanyaan
        question.innerHTML = 'YEAYY I LOVE YOU MORE PACAR OMG SAYANG :)';

        // Mengarahkan pengguna ke halaman 'photo.html' setelah 10 detik
        setTimeout(() => {
            window.location.href = 'photo.html';
        }, 10000); // Delay 10 detik untuk memberikan efek loading
    });

    noBtn.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    });
});
