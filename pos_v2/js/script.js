const profile = document.querySelector('.profile');
const profileDetail = document.querySelector('.profile-detail');
profile.addEventListener('click',() => {
    profileDetail.classList.toggle('hidden');
})