import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer, Divider, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import classes from "*.module.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));

type SidebarProps = {
    handleDrawerClose: () => void;
    open: boolean;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ handleDrawerClose, open}) => {
    return (
        <Drawer>
            <div className={classes.drawerHeader}>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}