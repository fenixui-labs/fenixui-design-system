import cytoscape from "cytoscape";
import { createContext, useContext } from "react";

export interface CytoscapeContextInterface {
	cytoscape: cytoscape.Core;
	container: HTMLElement;
}

/**
 * @hidden
 */
export const CytoscapeContext = createContext<CytoscapeContextInterface | null>(
	null,
);

/**
 * @hidden
 */
export const CytoscapeProvider = CytoscapeContext.Provider;

/**
 * React hook that store the cytoscape and html container reference.
 *
 * @returns
 */
export function useCytoscapeContext(): CytoscapeContextInterface {
	const context = useContext(CytoscapeContext);

	if (!context) {
		throw new Error(
			"useCytoscapeContext must be used within a CytoscapeContextProvider",
		);
	}
	return context;
}
