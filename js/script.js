const formEl = document.getElementById('form')

const checkValid = (e)=>{
e.preventDefault()
// console.log('hello')
let x = document.getElementById('exp_vaild').value
// console.log (x)
let y = prompt("Enter Your Input")
// console.log(y)
validCheck(x,y)
}

const validCheck = (x,y)=>{
    switch(x){
        case "email":
            let re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            if(y.match(re)){
                alert(`It's a valid Email`)
            }
            else alert ('Not Valid Email')
            break

        case "phone":
            let rp = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
            if(y.match(rp)){
                alert(`It's a valid Phone Number`)
            }
            else alert ('Not Valid Phone Number')
            break

        case "post_code":
            let rPc =  /^\d{4}$/
            if(y.match(rPc)){
                alert(`It's a valid Post Code`)
            }
            else alert ('Not valid Post Code')
            break
    }
}

formEl.addEventListener('submit', checkValid)