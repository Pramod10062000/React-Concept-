

//Name
export const alphaNumberValidation = (input) => {
    let result = /^[a-zA-Z0-9]{3,10}$/.test(input);
    if (result) {
        return false;
    }
    else {
        return true;
    }

}

//email
export const emailValidation = (input) => {
    let result = /^[a-zA-Z0-9]{3,50}@[a-zA-Z0-9]{0,9}\.[a-z]{3,10}$/.test(input);
    if (result) {
        return false;
    }
    else {
        return true;
    }

}

//password
export const passwordValidation = (input) => {
    let result = /^[a-zA-Z0-9@,-_]{6,20}}$/.test(input);
    if (result) {
        return false;
    }
    else {
        return true;
    }

}

//invalidation
export const bioValidation = (input) => {
    let result = /^[a-zA-Z0-9]}$/.test(input);
    if (result) {
        return false;
    }
    else {
        return true;
    }

}

//Number
export const NumberValidation = (input) => {
    let result = /^[0-9]{11}|[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(input);
    if (result) {
        return false;
    }
    else {
        return true;
    }

}