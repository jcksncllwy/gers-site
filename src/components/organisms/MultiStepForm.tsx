import { Box, Card, CardContent, Step as StepperStep, StepLabel as StepperStepLabel, Stepper, Typography } from "@mui/material";
import React, { ReactFragment } from "react";

export type Props = {
    title?: React.ReactNode,
    subtitle?: React.ReactNode,
    activeStep: number,
    stepNames: string[],
    children: React.ReactNode
}

export const MultiStepForm = ({ title, subtitle, activeStep, stepNames, children }: Props) => {
    const stepNodes = React.Children.toArray(children);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Card variant='elevation' sx={{ width: '100%' }}>
                <CardContent sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>

                    <Typography component="h1" variant="h4" align="center">
                        {title}
                    </Typography>
                    <Typography component="h1" variant="subtitle1" align="center">
                        {subtitle}
                    </Typography>

                    <Stepper 
                    activeStep={activeStep} 
                    sx={{ 
                        pt: 3, 
                        pb: 5, 
                        width: '100%',
                        display: {
                            xs: 'none',
                            sm: 'inherit'
                        }
                    }}
                    >
                        {stepNodes.map((stepNode, index) => (
                            <StepperStep key={stepNames[index]}>
                                <StepperStepLabel>{stepNames[index]}</StepperStepLabel>
                            </StepperStep>
                        ))}
                    </Stepper>

                    {stepNodes[activeStep]}

                </CardContent>
            </Card>
        </Box>
    )
}

/**
 * <MultiStepForm>
 *  <Step></Step>
 *  <Step></Step>
 * </MultiStepForm>
 */