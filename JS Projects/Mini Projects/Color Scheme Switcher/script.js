const buttons = document.querySelectorAll('button');
const body = document.querySelectorAll('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);//e-is event, target returns the element on which the event is happpening,id returns the id of the element

        switch (e.target.id) {
            case 'grey': {
                document.body.style.backgroundColor = e.target.id;
                break;
            }

            case 'yellow': {
                document.body.style.backgroundColor = e.target.id;
                break;
            }
            case 'blue': {
                document.body.style.backgroundColor = e.target.id;
                break;
            }
            case 'white': {
                document.body.style.backgroundColor = e.target.id;
                break;
            }


        }
    })
})
