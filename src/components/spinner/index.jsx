import { useDispatch } from "react-redux";
import { setSpinStat } from "../../store/reducers/authSlice";

const Spinner = () => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(setSpinStat(false));
  }, 3000);

  return (
    <div className="mx-auto w-full h-screen flex justify-center items-center bg-[#363636]">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
