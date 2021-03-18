import React from "react";
import { Card, ItemInput } from "./style";
import AddIcon from "@material-ui/icons/Add";

export function GalleryAddItem({ action, type = "type", accept, ref, ...props }) {
  return (
    <Card>
      <ItemInput
        id={`gallery-${type}`}
        type={type}
        accept={accept}
        onChange={action}
        style={{ opacity: 0, position: "absolute" }}
        ref={ref}
        {...props}
      />

      <AddIcon style={{ fontSize: 60, color: "#fff", fontWeight: 100 }} />
    </Card>
  );
}
