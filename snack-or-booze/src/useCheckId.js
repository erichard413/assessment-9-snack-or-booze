import React from 'react';

// this hook is to look up an ID from form data, and see if there's already an ID that exists with that name. If so, do not let user submit.

const useIsIdValid = (id, type, snacks, drinks) => {
    let res;
    if (type === 'snack') {
        res = snacks.filter(s => s.id === id);
    }
    if (type === 'drink') {
       res = drinks.filter(s => s.id === id);
    }

    if (res.length > 0) {
        return false
    }
    return true;
}

export default useIsIdValid;