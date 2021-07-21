import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories'
import PizzaBlock from '../components/Pizzas/PizzaBlock'
import PizzaBlockLoader from '../components/Pizzas/PizzaBlockLoader'
import SortPopup from '../components/SortPopup'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addToCart } from '../redux/actions/cart'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const addToCardHandler = (obj) => {
    dispatch(addToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          activeCategory={category}
          items={categories}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                onAddToCart={addToCardHandler}
                key={item.id}
                {...item}
                addedCount={cartItems[item.id] && cartItems[item.id].length}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaBlockLoader key={index} />)}
      </div>
    </div>
  )
}

export default Home
