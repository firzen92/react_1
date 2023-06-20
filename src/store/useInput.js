import {useState} from 'react';

export const useInput = () => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    return {
        value: text, onChange
    }
}