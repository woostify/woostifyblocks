// import React, { FC, useEffect, useRef, ReactNode, CSSProperties } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import useDeepCompareEffectForMaps from "use-deep-compare-effect";

// interface MapProps extends google.maps.MapOptions {
// 	style?: CSSProperties;
// 	onClick?: (e: google.maps.MapMouseEvent) => void;
// 	onIdle?: (map: google.maps.Map) => void;
// 	children: ReactNode;
// 	language: string;
// }

// const MyMapComponent: FC<MapProps> = ({
// 	onClick,
// 	onIdle,
// 	children,
// 	style,
// 	language,
// 	...options
// }) => {
// 	const ref = React.useRef<HTMLDivElement>(null);
// 	const [map, setMap] = React.useState<google.maps.Map>();

// 	useEffect(() => {
// 		if (ref.current && !map) {
// 			setMap(new window.google.maps.Map(ref.current, {}));
// 		}
// 	}, [ref, map]);

// 	useDeepCompareEffectForMaps(() => {
// 		if (map) {
// 			map.setOptions(options);
// 		}
// 	}, [map, options]);

// 	useEffect(() => {
// 		if (map) {
// 			["click", "idle"].forEach((eventName) =>
// 				google.maps.event.clearListeners(map, eventName)
// 			);

// 			if (onClick) {
// 				map.addListener("click", onClick);
// 			}

// 			if (onIdle) {
// 				map.addListener("idle", () => onIdle(map));
// 			}
// 		}
// 	}, [map, onClick, onIdle]);

// 	return (
// 		<>
// 			<div id={language} ref={ref} style={style} />
// 			{React.Children.map(children, (child) => {
// 				if (React.isValidElement(child)) {
// 					// set the map prop on the child component
// 					// @ts-ignore
// 					return React.cloneElement(child, { map });
// 				}
// 			})}
// 		</>
// 	);
// };

// export default MyMapComponent;
