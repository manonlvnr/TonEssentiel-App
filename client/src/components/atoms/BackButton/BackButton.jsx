import { IconArrowUpLeft } from "@tabler/icons-react";

function BackButton(props) {
    return (
        <button className='header__btn' onClick={props.handleback}>
            <IconArrowUpLeft size={40} />
        </button>
    );
}

export default BackButton;
