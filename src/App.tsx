import { Refine } from "@pankod/refine-core";
import { ReadyPage, ErrorComponent } from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";

import "styles/index.css";

import { CanvasList } from "pages/canvases/list";
import { CanvasCreate } from "pages/canvases/create";
import { CanvasShow } from "pages/canvases/show";

function App() {
  return (
    <Refine
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      resources={[
        {
          name: "canvases",
          create: CanvasCreate,
          list: CanvasList,
          show: CanvasShow,
        },
      ]}
      dataProvider={dataProvider(supabaseClient)}
      liveProvider={liveProvider(supabaseClient)}
      Title={Title}
      Header={Header}
      Sider={() => null}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    />
  );
}

export default App;
