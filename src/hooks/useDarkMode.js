import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("isDark", initialValue)
    
    // const handleChanges = updatedValue => {
    //     setValue(updatedValue);
    // };
    useEffect(() => {
        if (darkMode === true){
            const darkBody = document.querySelector('body')
            darkBody.classList.add('dark-mode')
            console.log("darkMode is TRUE")
        }
        else {
            const noEffect = document.querySelector('body')
            noEffect.classList.remove('dark-mode')
            console.log("darkMode is FALSE")
        }
    },[darkMode])

    return [darkMode, setDarkMode]
}



// export const useLocalStorage = (key, initialValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//         const item = window.localStorage.getItem(key);
//         return item ? JSON.parse(item) : initialValue;
//     });
//     const setValue = value => {
//         setStoredValue(value);
//         window.localStorage.setItem(key, JSON.stringify(value));
//     };
//     return [storedValue, setValue];
// };




    // const handleSubmit = e => {
    //     e.preventDefault();
    // }
    // const [darkMode, setDarkMode] = useLocalStorage('darkMode')

    // useEffect(() => {
    //     if (useLocalStorage){
    //         const darkBody = document.querySelector('body')
    //         darkBody.classList.add('dark-mode')
    //     } else {
    //         const noEffect = document.querySelector('body')
    //         noEffect.classList.remove('dark-mode')
    //     }
    //     return value
    // },[useDarkMode])