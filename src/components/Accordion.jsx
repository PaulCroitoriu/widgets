import React, { useState } from 'react';


const Accordion = ({ chestii }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedChestii = chestii.map( (c, index) => {
        // checking if the index is equal with the activeIndex
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={c.title}>
                <div 
                    className={`title ${active}`}
                    onClick={ () => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {c.title}
                </div>
                <div className={`content ${active}`}>
                    <p className="transition visible"> {c.content} </p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className="ui styled accordion">
            {renderedChestii}
        </div>
        
    )
}


export default Accordion