'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
      const seconds = Math.floor((timeDifference / 1000) % 60)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timeInterval)
      }
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deal of the Month</h3>
        <p>
          Hurry, this deal is only available for limited time, shop now and experience the future of
          technology at an unbeatable price!
        </p>
        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )
}

export default Promotion
