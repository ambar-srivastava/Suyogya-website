const ShowcaseVideo = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-stone-900 to-zinc-700 p-10 lg:p-20">
      <div className="bg-gradient-to-l from-gray-200 to-zinc-500 flex justify-center items-center w-full h-full">
        <div className=" w-[70%] h-[14rem] sm:h-[20rem] md:h-[25rem] lg:h-[50rem] flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[40rem]"
            src="https://www.youtube.com/embed/dAqQqmaI9vY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseVideo;
