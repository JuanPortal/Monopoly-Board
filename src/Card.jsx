import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faToolbox, faMoneyCheckDollar, faTrain, faQuestion, faLightbulb, faFaucetDrip, faHandcuffs } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faToolbox, faMoneyCheckDollar, faTrain, faQuestion, faLightbulb, faFaucetDrip, faHandcuffs)

export const Card = ({ type, color, icon, name, tag }) => {
  return (
    <div className={`card ${type}`} >
        <div className="color" style={{backgroundColor: color}}>
          {icon ? <FontAwesomeIcon icon={`fa-solid fa-${icon}`} /> : ""}
        </div>
        <div className="name">{name}</div>
        <div className="tag">{tag}</div>
    </div>    
  )
}
