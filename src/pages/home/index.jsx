import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/reducers/navSlice";
import { useEffect } from "react";
import Article from "./Article";
import ITHLNews from "./ITHLNews";
import Mediabox from "./Mediabox";
import Title from "./Title";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("home"));
  }, []);
  return (
    <div className="flex justify-center m-auto w-[1280px]">
      <div className="flex flex-col pt-80 p-10 justify-center gap-3 lg:gap-10 ">
        <Title />
        <div className="flex flex-col lg:flex-row justify-center gap-5 border border-[#4a8dcb] rounded-2xl p-5">
          <Mediabox />
          <Article />
        </div>
        <ITHLNews />
      </div>
    </div>
  );
};

export default Home;
