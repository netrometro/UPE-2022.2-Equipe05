import './styles.css';

export function Button({type, text}) {

    return (
        <button type={type}>{text}</button>
    )
}