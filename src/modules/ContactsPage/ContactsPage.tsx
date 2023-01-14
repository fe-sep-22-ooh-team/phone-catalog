/* eslint-disable max-len */
import { Breadcrumbs } from '../../components/Breadcrumbs';
import './ContactsPage.scss';
import LinkedIn from '../../assets/img/linkedin.svg';
import GitHub from '../../assets/img/github.svg';
import Gmail from '../../assets/img/gmail.png';

export const ContactsPage: React.FC = () => (
  <div className="page__container contacts__container">
    <Breadcrumbs location={['/', '/contacts']} />
    <h1 className="contacts-page__title">Contact us</h1>
    <div className="contacts-page__content">
      <div className="contacts-page__item">
        <h3 className="contacts-page__person">Harkavyi Oleksandr</h3>
        <div className="contacts-page__info">
          <img src={LinkedIn} alt="logo" className="contacts-page__logo" />
          <a
            href="https://www.linkedin.com/in/oleksandr-harkavyi-21333a25b/"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={GitHub} alt="logo" className="contacts-page__logo" />
          <a
            href="https://github.com/mitattt"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={Gmail} alt="logo" className="contacts-page__logo" />
          <a
            href="mailto:sashaharkavyi@gmail.com"
            className="contacts-page__email"
            target="_blank"
            rel="noreferrer"
          >
            sashaharkavyi@gmail.com
          </a>
        </div>
      </div>
      <div className="contacts-page__item">
        <h3 className="contacts-page__person">Kryvets Vadym</h3>
        <div className="contacts-page__info">
          <img src={LinkedIn} alt="logo" className="contacts-page__logo" />
          <a
            href="https://www.linkedin.com/in/vadim-krvts03/"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={GitHub} alt="logo" className="contacts-page__logo" />
          <a
            href="https://github.com/kryvets-vadym"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={Gmail} alt="logo" className="contacts-page__logo" />
          <a
            href="mailto:kryvets.vadym@gmail.com"
            className="contacts-page__email"
            target="_blank"
            rel="noreferrer"
          >
            kryvets.vadym@gmail.com
          </a>
        </div>
      </div>
      <div className="contacts-page__item">
        <h3 className="contacts-page__person">Maksymuk Roman</h3>
        <div className="contacts-page__info">
          <img src={LinkedIn} alt="logo" className="contacts-page__logo" />
          <a
            href="https://www.linkedin.com/in/roman-maksymuk/"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={GitHub} alt="logo" className="contacts-page__logo" />
          <a
            href="https://github.com/MXMUK"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={Gmail} alt="logo" className="contacts-page__logo" />
          <a
            href="mailto:romanmaksymuk@gmail.com"
            className="contacts-page__email"
            target="_blank"
            rel="noreferrer"
          >
            romanmaksymuk@gmail.com
          </a>
        </div>
      </div>
      <div className="contacts-page__item">
        <h3 className="contacts-page__person">Shapovalova Anna</h3>
        <div className="contacts-page__info">
          <img src={LinkedIn} alt="logo" className="contacts-page__logo" />
          <a
            href="https://www.linkedin.com/in/hannashapovalova/"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={GitHub} alt="logo" className="contacts-page__logo" />
          <a
            href="https://github.com/Anna-Shapovalova"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={Gmail} alt="logo" className="contacts-page__logo" />
          <a
            href="mailto:annashapovalova.dev@gmail.com"
            className="contacts-page__email"
            target="_blank"
            rel="noreferrer"
          >
            annashapovalova.dev@gmail.com
          </a>
        </div>
      </div>
      <div className="contacts-page__item">
        <h3 className="contacts-page__person">Tatarko Yaroslav</h3>
        <div className="contacts-page__info">
          <img src={LinkedIn} alt="logo" className="contacts-page__logo" />
          <a
            href="http://www.linkedin.com/in/yaroslav-tatarko"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={GitHub} alt="logo" className="contacts-page__logo" />
          <a
            href="https://github.com/yaro-bey"
            className="contacts-page__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts-page__info">
          <img src={Gmail} alt="logo" className="contacts-page__logo" />
          <a
            href="mailto:yaroslav.tatarko@gmail.com"
            className="contacts-page__email"
            target="_blank"
            rel="noreferrer"
          >
            yaroslav.tatarko@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
