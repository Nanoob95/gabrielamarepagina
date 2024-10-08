export default function Header({ title, title3, title2, subtitle }) {
  return (
    <header className="bg-[url('../assets/img//CasaAlto23_resultado.webp')] border-radius relative bg-cover bg-center w-full h-[80vh] flex justify-start items-center">
      <div className="bg-black w-full opacity-60 absolute top-0 h-[80vh]"></div>
      <div className="z-20 flex flex-col items-center gap-2 bg-blue-800 bg-opacity-60 p-5 md:p-7 lg:p-10 rounded md:w-3/4 lg:w-1/3 sm:w-3/4">
       
        <div className="flex flex-row justify-center items-center gap-4">
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-medium text-white tracking-wide text-center">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-2xl font-medium text-white tracking-wide text-center">
            {title2}
          </h2>
          <h3 className="text-4xl md:text-3xl lg:text-4xl font-medium text-white tracking-wide text-center">
            {title3}
          </h3>
        </div>
        <h4 className="text-left text-3xl md:text-2xl lg:text-4xl font-extralight text-blue-300 tracking-wide">
          {subtitle}
        </h4>
      </div>
    </header>
  );
}
