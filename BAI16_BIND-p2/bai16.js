const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

    return {
        add(car) {
            if (car !== null && car !== '') {
                cars.push(car);
                this.render();
            }
        },
        delete(index) {
            cars.splice(index, 1);
            this.render();
        },
        render() {
            const html = cars.map((car,index) => {
                return `
                 ${car} <span class="delete" data-index="${index}">&times</span><br>
                `;
            }).join('');
            root.innerHTML = html;
        },
        init() {
            // handle dom event
            submit.onclick = () => {
                const car = input.value.trim();
                if (car !== '') {
                    this.add(car);
                    input.value = '';
                    input.focus();
                }
            };

            this.render();
        }
    };
})();

app.init();
