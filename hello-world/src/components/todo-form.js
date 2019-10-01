import React, {useState} from 'react';

export default ({add}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        add({
            title: value,
            completed: false
        });
        setValue('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="todoInput" value={value}
                    onChange={e => setValue(e.target.value)} type="text" />
            </form>
        </div>
    )
}