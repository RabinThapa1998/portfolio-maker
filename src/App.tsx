import { useEffect, useState } from "react";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { themeChange } from "theme-change";
const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 4 },
      { i: "b", x: 1, y: 0, w: 2, h: 4 },
      { i: "c", x: 4, y: 0, w: 2, h: 4 },
      { i: "d", x: 0, y: 2, w: 2, h: 4 },
    ],
  };
  useEffect(() => {
    themeChange(false);
  }, []);
  const theme = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  return (
    <>
      <nav className="navbar flex-1 justify-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Theme
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {theme.map((th) => (
              <li key={th}>
                <button data-set-theme={th} data-act-class="ACTIVECLASS">
                  {th}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
      >
        <div key="a">
          <Widget id="a" backgroundColor="#867ae9" />
        </div>
        <div key="b">
          <Widget id="b" backgroundColor="#fff5ab" />
        </div>
        <div key="c">
          <Widget id="c" backgroundColor="#ffcead" />
        </div>
        <div key="d">
          <Widget id="d" backgroundColor="#c449c2" />
        </div>
      </ResponsiveGridLayout>
    </>
  );
}
function Widget({
  id,
  backgroundColor,
}: {
  id: string;
  backgroundColor: string;
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.pexels.com/photos/13717659/pexels-photo-13717659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes! {id}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default App;
