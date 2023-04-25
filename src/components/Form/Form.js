import React, { useState, useEffect } from 'react'
import Button from '../organism/Button/Button'
import Input from '../organism/Input/Input'
import styles from './Form.module.scss'
import { ReactComponent as SuccessImage } from '../../assets/img/svg/success-image.svg'
import clsx from 'clsx'

const Form = ({ onPostSuccess }) => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: undefined,
  }
  const [token, setToken] = useState()
  const [positions, setPositions] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  const [postResponse, setPostResponse] = useState({})
  const [submitDisabled, setSubmitDisabled] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      )
      const data = await response.json()
      setPositions(data.positions)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/token`
      )
      const data = await response.json()
      setToken(data.token)
    }
    fetchToken()
  }, [])

  const handleInputChange = (event) => {
    const { name, value, type } = event.target
    if (type === 'file') {
      setFormData({ ...formData, [name]: event.target.files[0] })
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('position_id', formData.position_id)
    formDataToSend.append('photo', formData.photo)
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
        {
          method: 'POST',
          headers: {
            Token: `${token}`,
          },
          body: formDataToSend,
        }
      )
      const data = await response.json()
      setPostResponse(data)
      if (data.success === true) {
        setFormData(initialFormData)
        onPostSuccess(true)
        console.log('success')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (
      formData.name !== '' &&
      formData.email !== '' &&
      formData.phone !== '' &&
      formData.position_id !== '' &&
      formData.photo !== undefined
    ) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [formData])

  return (
    <section className={styles.registration}>
      <form
        onSubmit={handleSubmit}
        className={clsx({
          [styles.registrationFormDisappearing]: postResponse.success === true,
        })}
      >
        <fieldset>
          <legend className={styles.registrationFormHeading}>
            Working with POST request
          </legend>

          <div className={styles.registrationFormRow}>
            <div className={styles.registrationFormInput}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChangeHandle={handleInputChange}
                min={2}
                max={60}
                label="Your name"
                error={postResponse?.fails?.name ? postResponse.fails.name : ''}
                required
              />
            </div>

            <div className={styles.registrationFormInput}>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChangeHandle={handleInputChange}
                label="Email"
                error={
                  postResponse?.fails?.email ? postResponse.fails.email : ''
                }
                required
              />
            </div>

            <div className={styles.registrationFormInput}>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChangeHandle={handleInputChange}
                label="Phone"
                error={
                  postResponse?.fails?.phone
                    ? `${postResponse.fails.phone}. Shoud be +380991112233`
                    : ''
                }
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.registrationFormRow}>
          <legend className={styles.registrationFormSubHeading}>
            Select your position
          </legend>

          <ul className={styles.registrationFormPositionList}>
            {positions.map((position) => {
              return (
                <li
                  className={styles.registrationFormPositionItem}
                  key={position.id + position.name}
                >
                  <Input
                    type="radio"
                    name="position_id"
                    value={position.id}
                    onChangeHandle={handleInputChange}
                    checked={formData.position_id === position.id}
                    label={position.name}
                    id={position.id + position.name}
                    accepet="image/jpg, image/jpeg"
                    required
                  />
                </li>
              )
            })}
          </ul>
        </fieldset>

        <div
          className={clsx(
            styles.registrationFormUpload,
            styles.registrationFormRow
          )}
        >
          <Input
            type="file"
            name="photo"
            onChangeHandle={handleInputChange}
            error={postResponse?.fails?.photo ? `postResponse.fails.photo` : ''}
            required
          />
        </div>

        <div className={styles.registrationFormRow}>
          <Button
            type="submit"
            color="yellow"
            disabled={submitDisabled}
            className={styles.registrationFormSubmit}
          >
            Sign up
          </Button>
        </div>
      </form>

      {postResponse.success === true && (
        <div className={styles.registrationSuccess}>
          <h2 className={styles.registrationFormHeading}>
            User successfully registered
          </h2>
          <SuccessImage />
        </div>
      )}
    </section>
  )
}

export default Form
