import jennie from '../../../assets/images/teamSection/kimjennie.jpg';
import jisoo from '../../../assets/images/teamSection/kimjisoo.jpg';
import lisa from '../../../assets/images/teamSection/lisa.jpeg';
import rose from '../../../assets/images/teamSection/roseannepark.jpg';

const products = [
  {
    id: 1,
    href: '#',
    imageSrc: jennie,
    name: 'Ким Дженни',
    name_eng: 'Kim Jennie',
    birthday: '16.01.1996',
    zodiac: 'козерог',
    height: '1,63 м',
    from: 'Сеул, Южная Корея',
  },
  {
    id: 2,
    imageSrc: jisoo,
    name: 'Розанна Пак',
    name_eng: 'Roseanne Park',
    birthday: '11.02.1997',
    zodiac: 'водолей',
    height: '1,68 м',
    from: 'Окленд, Новая Зеландия',
  },
  {
    id: 3,
    imageSrc: lisa,
    name: 'Лиса Манобан',
    name_eng: 'Lalisa Manoban',
    birthday: '27.03.1997',
    zodiac: 'овен',
    height: '1,67 м',
    from: 'Бурирам, Таиланд',
  },
  {
    id: 4,
    imageSrc: rose,
    name: 'Ким Джису',
    name_eng: 'Kim Jisoo',
    birthday: '3.01.1995',
    zodiac: 'козерог',
    height: '1,62 м',
    from: 'Кунпхо, Кёнгидо, Южная Корея',
  },
];

function TeamSection() {
  return (
    <section id="group">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-10 text-center text-3xl text-pink-300 font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">
          Состав группы
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="overflow-hidden group flex flex-col items-center">
              <div className="w-96 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-pink-300">{product.name}</h3>
              <p className="mt-1  text-sm  text-pink-200">{product.name_eng}</p>
              <h3 className="mt-4 text-lg font-medium text-pink-100">
                {product.birthday}, {product.zodiac}, {product.height}
              </h3>
              <h3 className="mt-4 text-lg font-medium text-pink-100">{product.from}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
