import React from 'react'
import { Card } from './Card'

export const Row = ({ location }) => {
    const data = {
        1: [31, "corner",       "",         "Jail",                     "",         0],
        2: [32, "property",     "green",    "Pacific Avenue",           "$300",     300],
        3: [33, "property",     "green",    "North Carolina Avenue",    "$300",     300],
        4: [34, "luck",         "",         "Community Chest",          "",         0],
        5: [35, "property",     "green",    "Pennsylvania Avenue",      "$320",     230],
        6: [36, "icon",         "",         "Short Line",               "$200",     200],
        7: [37, "luck",         "",         "Chance",                   "",         0],
        8: [38, "property",     "blue",     "Park Place",               "$350",     350],
        9: [39, "icon",         "",         "Luxury Tax",               "",         0],
        10: [30, "property",    "blue",     "Boardwalk",                "$400",     400],
    }

    const keys = Object.keys(data);

  return (
    <section className={`row ${location}`}>
        {keys.map(key => {
                const c = data[key];
                return (
                    <Card key={key} position={c[0]} type={c[1]} color={c[2]} name={c[3]} tag={c[4]} value={c[5]} />
                );
            })}
    </section>
  )
}


/*
<Card position={31} type="corner" color="" name="Jail" tag="" value={0}/>
<Card position={32} type="property" color="green" name="Pacific Avenue" tag="$300" value={300}/>
<Card position={33} type="property" color="green" name="North Carolina Avenue" tag="$300" value={300}/>
<Card position={34} type="luck" color="" name="Community Chest" tag="" value={0}/>
<Card position={35} type="property" color="green" name="Pennsylvania Avenue" tag="$320" value={320}/>
<Card position={36} type="icon" color="" name="Short Line" tag="$200" value={200}/>
<Card position={37} type="luck" color="" name="Chance" tag="" value={0}/>
<Card position={39} type="property" color="blue" name="Park Place" tag="$350" value={350}/>
<Card position={38} type="icon" color="" name="Luxury Tax" tag="$100" value={100}/>
<Card position={40} type="property" color="blue" name="Boardwalk" tag="$400" value={400}/>
*/