export const Welcome = () => {
  return (
    <section className="sm:bg-welcome welcome-bg w-full h-[602px] flex items-center pt-12 relative z-[0] bg-cover bg-no-repeat bg-center">
        <div className="sm:block hidden absolute z-[1] h-full w-full black__gradient"/>
        <div className="bg-section_heading flex w-[600px] h-[220px] py-9 px-10 justify-center items-center flex-shrink-0">
          <h3 className="text-white text-center font-forum text-[40px] font-regular leading-[49px] tracking-widest uppercase">Welcome<br />to the Brooklyn<br />Library</h3>
        </div>
    </section>
  );
};
