import React from 'react'

import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = () => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}></div>
      </div>
    </div>
  )
}

export default Filters
