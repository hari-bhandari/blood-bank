function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction(...args) {
        // @ts-ignore
        const context= this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

export default debounce;