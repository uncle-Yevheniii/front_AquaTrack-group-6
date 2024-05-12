import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { setActiveDay, setCurrentDate } from '../../redux/Calendar/CalendarSlice';
import css from './CalendarPagination.module.css';

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const CalendarPagination = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.calendar.currentDate);

    const goToPreviousMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        dispatch(setActiveDay(null));
        dispatch(setCurrentDate(newDate.getTime()));
    };

    const goToNextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        dispatch(setActiveDay(null));
        dispatch(setCurrentDate(newDate.getTime()));
    };

    return (
        <div className={css.container}>
            <button className={css.button} type="button" onClick={goToPreviousMonth}><FaChevronLeft /></button>
            <p>{months[new Date(currentDate).getMonth()]}, {new Date(currentDate).getFullYear()}</p>
            <button className={css.button} type="button" onClick={goToNextMonth}><FaChevronRight /></button>
        </div>
    );
};

export default CalendarPagination;