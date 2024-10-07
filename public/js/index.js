window.onload = (e) => {
    const random = Math.floor(Math.random() * 10);

    letters = document.querySelectorAll('#Title span')
    letters.forEach(letter => {
        const effect = random <=4 ? 'jump' : 'fall'
        letter.classList.add(effect)
    });

}