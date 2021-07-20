import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ items, activeCategory, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
}

Categories.defaulProps = {
  items: [],
  activeCategory: 0,
}

export default Categories
