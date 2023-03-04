import './styles.css';

export function TextInput({type, name, id, placeholder, onChange, value}) {

    return (
        <input type={type} name={name} id={id} placeholder={placeholder} required onChange={onChange} value={value}/>
    )
}