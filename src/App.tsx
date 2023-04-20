import { useState } from "react";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
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
  return (
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
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default App;
