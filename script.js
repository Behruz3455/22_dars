let input_Jismony = document.getElementById('Jismony');
let input_Yuridik = document.getElementById('Yuridik');



let Jismony = document.querySelector('.Jismony');
let Yuridik = document.querySelector('.Yuridik');



input_Jismony.addEventListener("click", () => {
    Jismony.classList.add('d-none');
    Yuridik.classList.remove('d-none');
});

input_Yuridik.addEventListener("click", () => {
    Jismony.classList.remove('d-none');
    Yuridik.classList.add('d-none');
});

