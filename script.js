let arrow = document.querySelector('.arrow');
let arrow2 = document.querySelector('.arrow2');
let featDrop = document.querySelector('.featDrop');
let companyDrop = document.querySelector('.companyDrop');


let feat = document.querySelector('.feat');
let comp = document.querySelector('.comp');

feat.addEventListener('click', () => {
    if (featDrop.style.display === 'none'){
        arrow.classList.toggle('active');
        featDrop.style.display = 'block';
    } else {
        featDrop.style.display = 'none';
    }
}); 

comp.addEventListener('click', () => {
    if (companyDrop.style.display === 'none'){

        companyDrop.style.display = 'block';
    } else {
        companyDrop.style.display = 'none';
    }

    arrow2.classList.toggle('active');
}); 