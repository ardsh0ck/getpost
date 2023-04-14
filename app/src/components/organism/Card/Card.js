import React from 'react'
import clsx from 'clsx'
import styles from './Card.module.scss'
import tooltip from '../../../assets/scss/_tooltip.scss'

const Card = ({ props }) => {
  const { photo, name, position, email, phone } = props

  return (
    <div className={styles.card}>
      <img src={photo} alt={name} className={styles.cardImage} />
      <div className={clsx(styles.cardName, 'tooltip')} data-tooltip={name}>
        <p>{name}</p>
      </div>

      <ul className={styles.cardBio}>
        <li className={styles.cardBioItem}>
          <div
            className={clsx(styles.cardBioItemInner, 'tooltip')}
            data-tooltip={position}
          >
            <p>{position}</p>
          </div>
        </li>
        <li className={styles.cardBioItem}>
          <div
            className={clsx(styles.cardBioItemInner, 'tooltip')}
            data-tooltip={email}
          >
            <p>
              <a href={`mailto:${email}`} className={styles.cardBioItemEmail}>
                {email}
              </a>
            </p>
          </div>
        </li>
        <li className={styles.cardBioItem}>
          <div
            className={clsx(styles.cardBioItemInner, 'tooltip')}
            data-tooltip={phone}
          >
            <p>{phone}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Card
