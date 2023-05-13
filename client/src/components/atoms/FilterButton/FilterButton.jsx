import { IconAdjustmentsHorizontal } from "@tabler/icons-react"
import './FilterButton.scss'

function FilterButton(props) {
    return (
        <button onClick={props.onClick} className="filter-btn">
            <IconAdjustmentsHorizontal className="filter-btn__icon" />
        </button>
    )
}

export default FilterButton
