import imageBlack from '../../../assets/images/homeSection/imageBlack.webp';

function HomeSection() {
  return (
    <section className="bg-black flex-1" id="home">
      <div
        style={{
          backgroundImage: `url(${imageBlack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative grid max-w-screen-xl min-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-pink-300">
            Добро пожаловать на фан-сайт BLACKPINK
          </h1>
          <p className="max-w-2xl mb-6 font-light text-pink-100 lg:mb-8 md:text-lg lg:text-xl dark:text-pink-100">
            Будьте в курсе последних новостей, фотографий и событий. Оставьте заявку, и мы подберем
            для Вас идеальный репертуар.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-300">
            Узнать больше
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
