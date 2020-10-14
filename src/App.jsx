import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



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

const options = [
    {
        label: 'The Color Red',
        value: 'red' 
    },
    {
        label: 'The Color Green',
        value: 'green' 
    },
    {
        label: 'The Color Blue',
        value: 'blue' 
    },
]


export default () => {

    const [selected, onSelectedChange] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">
                    <Accordion chestii={items}/>
            </Route>
            <Route path="/search">
                    <Search />
            </Route>
            <Route path="/dropdown">
                    <Dropdown 
                        label="Select A color"
                        options={options}
                        selected={selected}
                        onSelectedChange={onSelectedChange}
                    />
            </Route>
            <Route path="/translate">
                    <Translate />
            </Route>
        </div>
    )
}