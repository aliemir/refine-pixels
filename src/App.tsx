import "@pankod/refine-antd/dist/styles.min.css";
import "styles/index.css";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";

import { dataProvider, liveProvider } from "utility";

import { Footer, Layout } from "components";
import { CanvasShow, CanvasList, CanvasCreate } from "pages/canvases";

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      resources={[
        {
          name: "canvases",
          options: {
            label: "Refine Pixels",
          },
          create: CanvasCreate,
          list: CanvasList,
          show: CanvasShow,
        },
        {
          name: "pixels",
        },
      ]}
      dataProvider={dataProvider}
      liveProvider={liveProvider}
      Footer={Footer}
      Sider={() => null}
      Layout={Layout}
    />
  );
}

export default App;
