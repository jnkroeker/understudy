import { FunctionComponent, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import { VideoPlayer } from './video-player';
import { QueryContainer } from './query-container'
import { D3Container } from './d3-container';
import { Widget } from './Widget';
import useWindowDimensions from "../hooks/ui-hooks";

const originalItems = ["a", "b", "c"] //"a",

const initialLayouts = {
    lg: [
        { w: 7, h: 6, x: 0, y: 0, i: "a", moved: false, static: false },
        { w: 5, h: 6, x: 9, y: 0, i: "b", moved: false, static: false },
        { w: 11, h: 6, x: 0, y: 6, i: "c", moved: false, static: false }
    ]
}

type ComponentList = {
    [key: string]: React.ComponentType<any>,
}

const componentList: ComponentList = {
    a: VideoPlayer,
    b: QueryContainer,
    c: D3Container,
}

export const Content: FunctionComponent = () => {
    const [items, setItems] = useState(originalItems);
    const [layouts, setLayouts] = useState(
        initialLayouts
        // getFromLS("layouts") || initialLayouts
    );

    const { height, width } = useWindowDimensions();

    const onLayoutChange = (_: any, allLayouts: any) => {
        setLayouts(allLayouts);
    }
    // const onLayoutSave = () => {
    //     saveToLS("layouts", layouts);
    // }
    const onRemoveItem = (itemId: string) => {
        setItems(items.filter((i) => i !== itemId));
    };
    const onAddItem = (itemId: string) => {
        setItems([...items, itemId]);
    }

    return (
        <>
            {/* <TopBar/> */}
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs:480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={60}
                width={width}
                onLayoutChange={onLayoutChange}
            >
                {items.map((key: string) => (
                    <div
                        key={key}
                        className="widget"
                        data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
                    >
                        <Widget
                            id={key}
                            onRemoveItem={onRemoveItem}
                            Component={componentList[key]}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </>
    )
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

// function getFromLS(key: string) {
//     let ls = {};
//     if (global.localStorage) {
//         const item = global.localStorage.getItem("rgl-8")
//         if (item) {
//             ls = JSON.parse(item) || {};
//         }
//     }
//     return ls[key];
// }

// function saveToLS(key: string, value) {
//     if (global.localStorage) {
//         global.localStorage.setItem(
//             "rgl-8",
//             JSON.stringify({
//                 [key]: value
//             })
//         )
//     }
// }