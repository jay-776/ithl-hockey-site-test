const Title = () => {
  return (
    <div className="">
      <div className="flex justify-start gap-2 ">
        <img src="/social/facebook.svg" className="w-11" alt="Facebook" />
        <img src="/social/instagram.svg" className="w-11" alt="Instagram" />
        <img src="/social/twitch.svg" className="w-11" alt="Twitch" />
        <img src="/social/x.svg" className="w-11" alt="X" />
        <img src="/social/youtube.svg" className="w-11" alt="Youtube" />
      </div>
      <div className="text-white text-2xl lg:text-5xl font-bold text-center">IHTL News</div>
    </div>
  );
};

export default Title;
