import React from "react";
import { AntdLayout, Button, Col, Row, Typography } from "@pankod/refine-antd";
import { useCreate, useNavigation, useShow } from "@pankod/refine-core";
import { CanvasItem } from "components/canvas";
import { Canvas } from "types/canvas";
import { colors, ColorSelect } from "components/color-select";

export const CanvasShow = () => {
  const {
    queryResult: { data },
  } = useShow<Canvas>();

  const canvas = data?.data;

  const [color, setColor] = React.useState<typeof colors[number]>("black");

  const { list } = useNavigation();

  const { mutate } = useCreate();

  const onSubmit = (x: number, y: number) => {
    if (
      color &&
      typeof x !== "undefined" &&
      typeof y !== "undefined" &&
      canvas &&
      canvas.id
    ) {
      mutate({
        resource: "pixels",
        values: { x, y, color, canvas_id: canvas?.id },
      });
    }
  };

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
          <Col>
            <Button onClick={() => list("canvases")}>Go Back</Button>
          </Col>
          <Col flex="1" style={{ textAlign: "center" }}>
            <Typography.Title {...{ level: 3 }}>
              {canvas?.name ?? canvas?.id ?? ""}
            </Typography.Title>
          </Col>
          <Col>
            <Button
              disabled
              style={{ visibility: "hidden" }}
              onClick={() => list("canvases")}
            >
              Go Back
            </Button>
          </Col>
        </Row>
        <Row
          gutter={[32, 32]}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "24px",
          }}
        >
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <ColorSelect selected={color} onChange={setColor} />
          </Col>
          <Col>
            {canvas ? (
              <CanvasItem
                onPixelClick={onSubmit}
                canvas={canvas}
                scale={(20 / (canvas?.width ?? 20)) * 2}
                active={true}
              />
            ) : null}
          </Col>
        </Row>
      </AntdLayout.Content>
    </div>
  );
};
