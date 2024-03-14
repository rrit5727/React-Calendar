import CalendarContainer from "./CalendarContainer";
import "./CalendarItem.css"

const CalendarItem = ({dateObject}) => {
    return (
    <div className="CalendarItem">
        <span>{dateObject.day}</span><span>{dateObject.date}</span>
    </div>

    )
}






export default CalendarItem