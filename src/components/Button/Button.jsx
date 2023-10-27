import "./Button.css"

export const Button = (props) => {

    return(
        <button onClick={props.handleClick} className="button-primary">
            {props.title}
        </button>
    );

};