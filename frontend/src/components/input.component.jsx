const InputComponent = ({id, name, type, value, placeholder}) => {
    return(
        <div className="realtive w-[100%] mb-4">
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={value}
                className="input-box"
            />
        </div>
    )
}

export default InputComponent;
