import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { CHANGE_LANG } from "../../context/slices/langSlice";

function Lang() {
  const lang = useSelector((state: RootState) => state.LANG.current);
  const dispatch = useDispatch();
  const { header } = lang;

  return (
    <select onChange={(e) => dispatch(CHANGE_LANG({lang: e.target.value}))}>
      {/*       <option value="">Select lenguage</option> */}
      {header.lenguages.map((lenguage: string) => {
        return <option value={lenguage}>{lenguage}</option>;
      })}
    </select>
  );
}

export default Lang;
