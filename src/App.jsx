import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
    {
        title: 'What is love',
        content: 'Love encompasses a range of strong and positive emotional and mental states, from the most sublime virtue or good habit, the deepest interpersonal affection and to the simplest pleasure.'
    },
    {
        title: 'What is a fancy word for love?',
        content: 'deep affection, fondness, tenderness, warmth, intimacy, attachment, endearment. devotion, adoration, doting, idolization, worship. passion, ardour, desire, lust, yearning, infatuation, adulation, besottedness.'
    },
    {
        title: 'How do you romance a man deeply?',
        content: 'Men like to feel special just as much as women do. Let him know that you think he is sexy, smart, or the most amazing man you have ever met.'
    }
]


export default () => {
    return (
        <div>
            <Search/>
        </div>
    )
}