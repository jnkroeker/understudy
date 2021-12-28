import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "0.5rem"
    },
    spacer: {
        flexGrow: 1
    },
    body: {
        padding: "0.5rem",
        flexGrow: 1
    }
})

type WidgetList = {
    [key: string]: any,
}

const widgetNames: WidgetList = {
    a: 'Video Player',
    b: 'Query Container',
    c: 'D3 Container',
};

type WidgetProps = {
    id: string;
    onRemoveItem: (id: string) => void;
    component: any
}

export const Widget: FunctionComponent<WidgetProps> = ({id, onRemoveItem, component}) => {
    const classes = useStyles();
    return (
        <Card>
            <div>
                <Typography>
                    {widgetNames[id]}
                </Typography>
                <div className={classes.spacer}/>
            </div>
            <div className={classes.body}>
                {component}
            </div>
        </Card>
    )
}