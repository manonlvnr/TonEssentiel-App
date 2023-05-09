import './Input.scss';

function Input(props) {
    return (
        <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            value={props.value}
            className="input"
        />
    );
}

export default Input;
