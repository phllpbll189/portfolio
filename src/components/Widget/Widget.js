import './Widget.css'
import { useSelector, useDispatch } from 'react-redux'
import { closeWidget } from '../../Redux/widgetSlice'
import { ReactComponent as X} from '../../resources/x.svg'

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
                <div className='widget-navbar'>
                    <div onClick={exit} className='exit-widget'>
                        <X className='exit-button'/>
                    </div>
                    <div className='title'>{currentWidget}</div>
                </div>
            </div>
        </div>

    )
}