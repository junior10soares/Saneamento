import React, { Fragment } from "react";
import { Card, List } from "./style";

export function DocumentsList({ work_name, documents, children, ...rest }) {
  return (
    <Fragment {...rest}>
      <Card style={{ maxWidth: 1300 }}>
        <List>{children}</List>
      </Card>
    </Fragment>
  );
}
