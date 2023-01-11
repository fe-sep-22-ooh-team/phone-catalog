import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import homeIcon from '../../assets/img/Home.svg';

type Props = {
  location: string[];
};

export const Breadcrumbs: React.FC<Props> = ({ location }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {location.map((page: string, i) => {
        const key = `${page}${i}`;

        return (
          <Link to={`${page}`} className={styles.breadcrumbs__link} key={key}>
            {page === '/'
              ? (
                <img
                  src={homeIcon}
                  className={styles.breadcrumbs__img}
                  alt="home"
                />
              )
              : `${page[1].toUpperCase()}${page.slice(2)}`}
          </Link>
        );
      })}
    </nav>
  );
};
