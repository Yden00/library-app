export const Welcome = () => {
  return (
    <section className="bg-welcome w-full h-[602px] flex items-center pt-12 relative z-[0] bg-cover bg-no-repeat bg-center">
        <div className="absolute z-[1] h-full w-full black__gradient"/>
        <div className="bg-section_text flex w-[600px] h-[220px] py-9 px-10 justify-center items-center flex-shrink-0">
          <h3 className="text-white text-center font-Forum text-[40px] font-thin leading-tight tracking-wider uppercase">Welcome<br />to the Brooklyn<br />Library</h3>
        </div>
    </section>
  );
};
