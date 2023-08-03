export const Welcome = () => {
  return (
    <section className="welcome-section bg-welcome w-full h-[602px] flex items-center pt-12 relative z-[0] bg-cover bg-no-repeat bg-center">
        <div className="absolute z-[1] h-full w-full black__gradient"/>
        <div className="welcome-container bg-section_heading flex w-[600px] h-[220px] justify-center items-center flex-shrink-0 mt-2">
          <h3 className="text-white text-center font-forum text-[40px] font-regular leading-[49px] tracking-widest uppercase px-4">Welcome<br />to the Brooklyn<br />Library</h3>
        </div>
    </section>
  );
}
