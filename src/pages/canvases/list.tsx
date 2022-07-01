import {
  AntdLayout,
  Button,
  Col,
  CreateButton,
  Row,
  Typography,
} from "@pankod/refine-antd";
import { useList, useNavigation } from "@pankod/refine-core";
import { CanvasItem } from "components/canvas";
import { Canvas } from "types/canvas";

export const CanvasList = () => {
  const { data } = useList<Canvas>({
    resource: "canvases",
    metaData: {},
  });

  const { show } = useNavigation();

  return (
    <div>
      <AntdLayout.Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          backgroundColor: "white",
        }}
      >
        <Row style={{ marginBottom: "24px" }}>
          <Col flex="1">
            <Typography.Title {...{ level: 3 }}>Canvases</Typography.Title>
          </Col>
          <Col>
            <CreateButton>Create a Canvas</CreateButton>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {data?.data?.map((canvas) => (
            <Col key={canvas.id}>
              <Button
                onClick={() => {
                  show("canvases", canvas.id);
                }}
                style={{
                  maxHeight: "unset",
                  height: "auto",
                  paddingTop: "15px",
                }}
              >
                <CanvasItem
                  canvas={canvas}
                  scale={20 / canvas.width}
                  active={false}
                />
              </Button>
            </Col>
          ))}
        </Row>
      </AntdLayout.Content>
    </div>
  );
};
