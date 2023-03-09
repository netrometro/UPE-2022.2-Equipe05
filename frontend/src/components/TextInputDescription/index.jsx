import './styles.css';

export function TextInputDescription({name, id, onChange, value}) {

    return (
        <textarea name={name} id={id} cols="30" rows="7" required onChange={onChange} value={value}></textarea>
    )
}