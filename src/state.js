export const getState = (forceClear) => {
    const s = localStorage.getItem("state");
    if (!s || forceClear) {
        const newState = {
            isRegular: false,
            image: '',
            name: '',
            amount: 0,
            target: '',
            description: '',
            receiver: 0,
            author: 0,
        };

        localStorage.setItem("state", JSON.stringify(newState));
        return newState;
    } else {
        return JSON.parse(s);
    }
};

export const setState = (obj) => {
    const s = getState();
    const newState = {...s, ...obj};
    localStorage.setItem("state", JSON.stringify(newState));
    return newState;
};
