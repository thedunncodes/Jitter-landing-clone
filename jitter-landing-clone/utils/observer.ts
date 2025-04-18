const options = {
    root: null,
    rootMargin: '-40px',
    threshold: 1
}

function observerCallFn (className: string) {
    const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
        const currentX = entry.boundingClientRect.x;
        console.log(currentX)
        if (entry.isIntersecting){
            entry.target.classList.add(className);
        } else entry.target.classList.remove(className);
    });
    }

    return observerCallback
}

export default function getObserver (className: string) {
    const callbacks = observerCallFn(className);
    const observer = new IntersectionObserver(callbacks, options);

    return observer;
}