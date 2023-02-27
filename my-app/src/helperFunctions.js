import { useEffect, useCallback } from 'react';

export default function useDebounce(effect, dependencies, delay) {
    /* eslint-disable */
    const callback = useCallback(effect, dependencies);
    /* eslint-enable */

    useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
    }, [callback, delay]);
}