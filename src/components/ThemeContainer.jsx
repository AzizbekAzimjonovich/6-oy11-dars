import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";

const colors = ["#10439F", "#874CCC", "#C65BCF"];

function ThemeContainer() {
  const { dispatch } = useContext(GlobalContext);

  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_NAVBAR_BG",
      payload: color,
    });
  };

  return (
    <div className="mb-10 py-3">
      <div className="align-element flex justify-between items-center">
        <div className="flex flex-row gap-2">
          {colors.map((color) => {
            return (
              <div
                key={color}
                onClick={() => changeColor(color)}
                className="h-7 w-7 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-10 h-10" />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-10 h-10" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThemeContainer;
