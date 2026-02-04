// fetch puzzle.json и отрисовка
fetch('./puzzle.json')
    .then(res => res.json())
    .then(puzzle => {
        const container = document.getElementById('puzzle');
        puzzle.forEach(digit => {
            const div = document.createElement('div');
            div.className = 'piece';
            div.textContent = digit;
            container.appendChild(div);
        });
    });
