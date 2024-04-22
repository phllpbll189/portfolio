import './Widget.css'
import { useSelector, useDispatch } from 'react-redux'
import { closeWidget } from '../../Redux/widgetSlice'

export const Widget = () => {
    const currentWidget = useSelector(state => state.widgetSlice.widget)
    const dispatch = useDispatch()

    const stopClick = (e) => {
        e.stopPropagation();
    }

    const exit = () => {
        dispatch(closeWidget())
    }

    return (
        <div onClick={stopClick} className='screen-cover'>
            <div className='widget'>
                <div onClick={exit} className='exit-widget'>

                </div>
                {currentWidget}
            </div>
        </div>

    )
}