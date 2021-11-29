import React from 'react'; 
import './categories.css'; 


const Categories = React.memo(function Categories({activeCategory, items , onClickCategory}) {

  return (
                <ul>
                    <li className={activeCategory === null ? 'category active' : 'category'} onClick={() => onClickCategory(null)}>
                        Главные новости
                    </li>

                    {items &&
                    items.map((name, index) =>(
                        <li 
                        onClick={() => onClickCategory(index)} 
                        key={`${name}_${index}`} 
                        className={activeCategory === index ? 'category active ' : 'category'}
                        >
                        {name}
                        </li>
                   ))
                }
                </ul>
            )
})

export default Categories

