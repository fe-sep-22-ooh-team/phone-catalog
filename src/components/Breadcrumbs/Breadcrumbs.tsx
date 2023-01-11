import { Link } from 'react-router-dom';
// import styles from './Breadcrumbs.module.scss';
import homeIcon from '../../assets/img/Home.svg';

type Props = {
  location: string[];
};

export const Breadcrumbs: React.FC<Props> = ({ location }) => {
  return (
    <nav className="breadcrumbs">
      {location.map((page: string) => {
        return (
          <Link
            to={`${page}1`}
            style={{ color: '#000' }}
            className="breadcrumbs__link"
            key={page}
          >
            {page === '/' ? (
              <img src={homeIcon} className="breadcrumbs__img" alt="home" />
            ) : (
              `${page[1].toUpperCase()}${page.slice(2)}`
            )}
          </Link>
        );
      })}
    </nav>
  );
};
