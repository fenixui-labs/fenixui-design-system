import cytoscape, { Core, CytoscapeOptions } from "cytoscape";
import { equals } from "rambda";

import { CytoscapeProvider } from "../hooks/context";
import React, {
	CSSProperties,
	PropsWithChildren,
	Ref,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

export interface CytoscapeContainerProps {
	/**
	 * Cytoscape options
	 */
	options?: CytoscapeOptions;
	/**
	 * HTML id
	 */
	id?: string;
	/**
	 * HTML class
	 */
	className?: string;
	/**
	 * HTML CSS style
	 */
	style?: CSSProperties;
}

/**
 * The `CytoscapeContainer` component is responsible for creating the Cytoscape instance
 * and providing it to the its child components using React Context accessible via the hook `useCytoscape`
 *
 * @category Component
 */
const CytoscapeContainerComponent = (
	{
		options,
		id,
		className,
		style,
		children,
	}: PropsWithChildren<CytoscapeContainerProps>,
	ref: Ref<Core | null>,
) => {
	const rootRef = useRef<HTMLDivElement>(null);

	const containerRef = useRef<HTMLDivElement>(null);

	const [cytoscapeInstance, setCytoscapeInstance] = useState<Core | null>(null);

	useEffect(() => {
		let instance: Core | null = null;

		if (containerRef.current !== null) {
			instance = cytoscape({
				container: containerRef.current,
				...options,
			});

			if (cytoscapeInstance && !equals(cytoscapeInstance, instance)) {
				cytoscapeInstance.destroy();
			}
		}

		setCytoscapeInstance(instance);

		return () => {
			if (instance) {
				instance.destroy();
			}
			setCytoscapeInstance(null);
		};
	}, [containerRef, cytoscapeInstance]);

	/**
	 * Forward the Cytoscape instance ref
	 */
	useImperativeHandle(ref, () => cytoscapeInstance, [cytoscapeInstance]);

	return (
		<div
			id={id}
			className={`react-cytoscape ${className || ""}`}
			style={style}
			ref={rootRef}
		>
			<div className="cytoscape-container" ref={containerRef} />
			{cytoscapeInstance && (
				<CytoscapeProvider
					value={{
						cytoscape: cytoscapeInstance,
						container: containerRef.current!,
					}}
				>
					{children}
				</CytoscapeProvider>
			)}
		</div>
	);
};

export const CytoscapeContainer = forwardRef(CytoscapeContainerComponent);
