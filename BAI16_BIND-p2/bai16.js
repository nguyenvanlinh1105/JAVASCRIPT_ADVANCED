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
                 <li>${car} <span class="delete" data-index="${index}">&times</span></li><br>
                `;
            }).join('');
            root.innerHTML = html;
        },
        handleDelete(e){
            const deleteBtn=e.target.closest('.delete');
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index)
                this.render();
            }
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
            root.onclick= this.handleDelete.bind(this)
            this.render();
        }
    };
})();

app.init();
// Delegate pattern : bắt được sự kiện get vào element đươc thêm vào dom khi chương trình nó chạy 


