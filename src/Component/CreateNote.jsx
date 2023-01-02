import React, {useState} from 'react'

const CreateNote = (props) => {
    const [isActive, setIsActive] = useState('')
    const toggleData = () => {
        setIsActive(!isActive) 
    }
    return (
        <>
            <div className="accor">
                <div className="heading">{props.curElement.headingData}
                    <p className='arrow-icon' onClick={toggleData}>{isActive?"-":"+"}</p>
                </div>
                {isActive ? <div className='pannel'>{props.curElement.pannelData}</div> : ''}

            </div>
        </>
    )
}

export default CreateNote
