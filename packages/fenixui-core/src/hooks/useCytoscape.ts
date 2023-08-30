import cytoscape from "cytoscape";

import { useCytoscapeContext } from "./context";

/**
 * React hook to retrieve the cytoscape instance (from the context).
 *
 * @returns
 */
export function useCytoscape(): cytoscape.Core {
	return useCytoscapeContext().cytoscape;
}
