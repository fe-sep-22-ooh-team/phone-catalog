import { CategoryCard } from '../CategoryCard';

export const Categories: React.FC = () => (
  <>
    <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
      <h2 className="title">Shop by category</h2>
    </div>

    <div className="grid__item--tablet--1-4 grid__item--desktop--1-8">
      <CategoryCard />
    </div>

    <div className="grid__item--tablet--5-8 grid__item--desktop--9-16">
      <CategoryCard />
    </div>

    <div className="grid__item--tablet--9-12 grid__item--desktop--17-24">
      <CategoryCard />
    </div>
  </>
);
