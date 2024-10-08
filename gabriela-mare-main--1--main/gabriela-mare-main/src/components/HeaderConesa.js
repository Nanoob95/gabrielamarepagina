export default function HeaderConesa({ title, subtitle }) {
  return (
    <header className="bg-[url('../assets/img/conesa26_resultado.webp')] bg-unset bg-cover bg-center w-full h-[80vh] flex justify-start items-center ">
      <div className="bg-black w-full opacity-60 absolute top-0 h-[80vh]"></div>
      <div className="z-20 flex flex-col items-center gap-2 bg-blue-800 bg-opacity-60 p-5 md:p-7 lg:p-10 rounded md:w-3/4 lg:w-1/3 sm:w-3/4">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-medium text-white tracking-wide text-center">
          {title}
        </h1>
        <h2 className="text-3xl md:text-2xl lg:text-4xl font-extralight text-blue-300 tracking-wide text-center">
          {subtitle}
        </h2>
      </div>
    </header>
  );
}

// bg-[url('../assets/conesa30_resultado.webp')]