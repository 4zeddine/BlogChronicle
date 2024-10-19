import {useState} from "react";

const InputComponent = ({id, name, type, value, placeholder, icon}) => {
    const [ passwordVisibility , setPasswordVisibility ] = useState(false);
    return(
        <div className="relative w-[100%] mb-4">
            <input
                id={id}
                name={name}
                type={type === "password" ? passwordVisibility ? "text" : "password" : type}
                placeholder={placeholder}
                defaultValue={value}
                className="input-box"
            />
            <i className={"fi "+ icon +" input-icon"}></i>
            {
                type === "password" ? <i className={"fi fi-ss-eye"+ (passwordVisibility ? "": "-crossed") +" input-icon left-[auto] right-4 cursor-pointer"} onClick={() => setPasswordVisibility(current => !current )}></i> : ""
            }
        </div>
    )
}

export default InputComponent;
