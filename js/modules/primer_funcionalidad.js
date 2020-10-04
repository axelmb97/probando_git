const d = document
export default function detectarDispositivo(){
    
    const $form = d.querySelector('#form'),
        $input = d.querySelector('input[type="text"]'),
        $print = d.querySelector('#print')
    d.addEventListener('submit', e => {
        
        if(e.target === $form){
            e.preventDefault()
            $print.textContent = $input.value
            $input.value = ''
        } 
    })
}