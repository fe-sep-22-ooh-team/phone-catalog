import categoryImg from '../../assets/img/Category.svg';

export const CategoryCard: React.FC = () => (
  <div className="card">
    <img
      src={categoryImg}
      alt="Mobile phones"
      className="card__img"
    />

    <h3 className="card__title">
      Mobile phones
    </h3>

    <p className="card__description">
      95 models
    </p>
  </div>
);
