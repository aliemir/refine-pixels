import {
  Button,
  Col,
  CreateButton,
  Row,
  Typography,
} from "@pankod/refine-antd";
import { useList, useNavigation, useResource } from "@pankod/refine-core";
import { CanvasItem } from "components/canvas";
import { Canvas } from "types/canvas";

export const CanvasList = () => {
  const {
    resource: { label, name },
  } = useResource();
  const { data } = useList<Canvas>({
    resource: "canvases",
    config: {
      hasPagination: false,
      sort: [
        {
          field: "created_at",
          order: "desc",
        },
      ],
    },
  });

  const { show } = useNavigation();

  return (
    <>
      <Row style={{ marginBottom: "24px" }}>
        <Col flex="1">
          <Typography.Title level={3}>{label ?? name}</Typography.Title>
        </Col>
        <Col>
          <CreateButton>Create a Canvas</CreateButton>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        align="middle"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(248px, 1fr))",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {data?.data?.map((canvas) => (
          <Col
            key={canvas.id}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "248px",
            }}
          >
            <Button
              onClick={() => {
                show("canvases", canvas.id);
              }}
              style={{
                height: "100%",
                maxHeight: "unset",
                paddingTop: "15px",
                display: "flex",
                alignItems: "start",
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
    </>
  );
};
