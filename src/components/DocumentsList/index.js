import React, { Fragment } from "react";
import { Card, List } from "./style";

export function DocumentsList({ work_name, documents, children, ...rest }) {
  return (
    <Fragment {...rest}>
      <Card style={{maxWidth: 1300}}>
        {/* <h4>Documentações da Obra "{work_name}":</h4> */}
        <List >
          {/* {documents.map((doc) => (
            <li>
              <span>Documento 1</span>
              <a href="">
                <img src="/download.svg" width="30" />
              </a>
            </li>
          ))} */}
          {children}
        </List>
      </Card>
    </Fragment>
  );
}
