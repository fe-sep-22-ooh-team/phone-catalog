import { Link } from 'react-router-dom';
import homeIcon from '../../assets/img/Home.svg';

type Props = {
  location: string[],
};

export const Breadcrumbs: React.FC<Props> = ({ location }) => {
  return (
    <nav>
      {location.map((page: string, i) => {
        // let title;

        if (i !== 0 && location.length > 1) {
          // title = page.slice[0].toUpperCase() + page.slice(1);
        }

        return (
          <div key={page}>
            <Link to={`/${page}`}>
              <>
                {i !== location.length - 1
                  ? <img src={homeIcon} alt="home" />
                  : <p>{page}</p>}
              </>
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
