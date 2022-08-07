import PropTypes from "prop-types"
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>
      )}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>)
        )}
      </ul>
    </section>
  )
}

export default Statistics;


Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isOnline: PropTypes.number,
}