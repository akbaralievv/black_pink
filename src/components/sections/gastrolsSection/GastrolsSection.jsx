import malaghia from '../../../assets/images/gastrolsSection/malaghia.jpg';
import dubai from '../../../assets/images/gastrolsSection/dubai.png';
import california from '../../../assets/images/gastrolsSection/california.jpg';

const products = [
  {
    id: 1,
    imageSrc: malaghia,
    name: 'Малайзия',
    date: '16.06.2024',
  },
  {
    id: 2,
    imageSrc: dubai,
    name: 'Дубай',
    date: '16.07.2024',
  },
  {
    id: 3,
    imageSrc: california,
    name: 'Калифорния',
    date: '01.09.2024',
  },
];

function GastrolsSection() {
  return (
    <section id="gastrols">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-10 text-center text-3xl text-pink-300 font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">
          Гастроли
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center relative h-64 bg-gray-200 overflow-hidden rounded-lg"
              style={{
                backgroundImage: `url(${product.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
              <div className="relative z-10 p-4 text-center">
                <h3 className="mt-4 text-xl font-medium text-white">{product.name}</h3>
                <p className="mt-1 text-lg text-white">{product.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GastrolsSection;
