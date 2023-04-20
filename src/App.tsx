import { useState } from "react";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 0, y: 2, w: 2, h: 2 },
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
    <div style={{ width: "100%", height: "100%", backgroundColor }}>{id}</div>
  );
}
export default App;
