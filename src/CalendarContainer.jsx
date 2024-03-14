import "./App"
import CalendarItem from "./CalendarItem"
import "./CalendarContainer.css"

const CalendarContainer = ({dayAndDate}) => {
    const CalendarItems = dayAndDate.map((dateObject, index) => <CalendarItem dateObject={dateObject} key={index}/>)
    return (
        <div className="CalendarContainer">
            {CalendarItems}
        </div>

    )
} 

export default CalendarContainer