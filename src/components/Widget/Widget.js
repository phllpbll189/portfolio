import './Widget.css'
import { useSelector, useDispatch } from 'react-redux'
import { closeWidget } from '../../Redux/widgetSlice'
import { ReactComponent as X} from '../../resources/x.svg'
import data from '../../portFolioData'




export const Widget = () => {
    const currentWidget = useSelector(state => state.widgetSlice.widget)
    const dispatch = useDispatch()

    const stopClick = (e) => {
        e.stopPropagation();
    }

    const exit = () => {
        dispatch(closeWidget())
    }

    let widgetStyle = {
        backgroundImage: 'url(' + require(`../../resources/${data[currentWidget].img}`) + ')',
        backgroundPosition: data[currentWidget]["bgPosition"],
        backgroundSize: "contain"
    }

    let desc = data[currentWidget]["Description"]

    return (
        <div onClick={stopClick} className='screen-cover'>
            <div className='widget'>
                <div className='widget-navbar'>
                    <div onClick={exit} className='exit-widget'>
                        <X className='exit-button'/>
                    </div>
                
                    <div className='title'>{currentWidget}</div>
                </div>
                
                <img alt={data[currentWidget].alt} style={widgetStyle} className='subject-image'/>
                <div className='content-container' dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
        </div>

    )
}