import React, { Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";
import { withStyles } from "@material-ui/core/styles";

const Connector = withStyles({
  active: {
    "& $line": {
      backgroundColor: "#27AE60",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#27AE60",
    },
  },
  line: {
    height: 4,
    border: 0,
    backgroundColor: "#E5E5E5",
    borderRadius: 1,
  },
})(StepConnector);

export function StepsConstruction({ phase }) {
  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={phase} connector={<Connector />}>
        <Step>
          <StepLabel
            completed={phase >= 0}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 0 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>Início</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 1}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 1 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>10%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 2}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 0 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>20%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 3}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 3 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>30%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 4}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 4 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>40%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 5}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 5 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>50%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 6}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 6 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>60%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 7}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 7 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>70%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 8}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 8 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>80%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 9}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 9 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>90%</p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            completed={phase >= 10}
            icon={
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: phase >= 10 ? "#27AE60" : "#E5E5E5",
                }}
              />
            }
          >
            <p>FInalizado</p>
          </StepLabel>
        </Step>
      </Stepper>
    </Fragment>
  );
}
