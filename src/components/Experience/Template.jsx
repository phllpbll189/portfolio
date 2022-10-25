import './Template.css'

export const Template = ({name, title, dates, logo, duties}) => {
    const logoclass = "job-logo " + logo
    let dutyElems = []

    duties.forEach(duty => {
        dutyElems.push(<li>{duty}</li>);
    });

    return(
        <div className="job-container">
            
            <svg className={logoclass}/>
            <div className="job-description">
                <p className="job-name">{name}</p>
                <p className="job-title">{title}</p>
                <ul>
                    {dutyElems}
                </ul>
            </div>
            <div className="job-dates">
                <p className="start-date">{dates.start}</p>
                <p>-</p>
                <p className="end-date">{dates.end}</p>
            </div>
        </div>
    )
}