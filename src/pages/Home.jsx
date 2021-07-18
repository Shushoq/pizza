import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories'
import Pizzas from '../components/Pizzas/Pizzas'
import SortPopup from '../components/SortPopup'
import { setCategory } from '../redux/actions/filters'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)

  const onSelectCaregory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCaregory} items={categories} />
        <SortPopup
          items={sort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <Pizzas key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Home
