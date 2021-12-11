import React, { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setAlert } from '../../store/actions/alertActions'
import { getWeather, setLoading } from '../../store/actions/weatherActions'

interface SerachProps {
  title: string
}

export const Search: FC<SerachProps> = ({ title }) => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'))
    }

    dispatch(setLoading())
    dispatch(getWeather(city))
    setCity('')
  }

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={(e) => submitHandler(e)}>
            <input
              placeholder="Enter city name"
              style={{ maxWidth: 300 }}
              className="input has-text-centered mb-2"
              type="text"
              value={city}
              onChange={(e) => changeHandler(e)}
            />
            <button
              className="button is-primary is-fullwidth"
              style={{ maxWidth: 300, margin: '0 auto' }}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
