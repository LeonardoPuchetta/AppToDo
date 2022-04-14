
//funcion para validar largo minimo de un input 
//recibe data(todo el input) y largo minimo 
export function minLengthValidation(inputData,minLength) {

    const {value} = inputData;
    removeClassErrorSuccess(inputData);

    if (value.length >= minLength){
        inputData.classList.add('success');
        return true 
    } else {
        inputData.classList.add('error');
        return false
    }


}
//para que no haya numeros en el nombre o el apellido 
export function nameValidation (inputData) {


    const nameValid = /^[a-zA-Z]+$/

    const {value} = inputData;
    removeClassErrorSuccess(inputData);

    const resultValidation = nameValid.test(value);

    if (resultValidation) {
        inputData.classList.add('success');
        return true
    } else {
        inputData.classList.add('error');
        
        return false
    }

    

}

export function emailValidation(inputData){

    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const {value} = inputData;

    removeClassErrorSuccess(inputData);

    const resultValidation = emailValid.test(value);

    if (resultValidation) {
        inputData.classList.add('success');
        return true
    } else {
        inputData.classList.add('error');
        return false
    }

    

}

///funcion para remover clase de error o success
function removeClassErrorSuccess (inputData){


    inputData.classList.remove("success");
    inputData.classList.remove("error");


}