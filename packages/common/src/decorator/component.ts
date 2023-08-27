export type ElementMeta = {
	selector?: string;
	style?: string;
	template?: string;
};

export function Component(meta: ElementMeta): PropertyDecorator {
	if (!meta) {
		console.error("Component must include ElementMeta to compile");
	}
	return (target: any) => {
		if (!meta.style) {
			meta.style = "";
		}
		if (!meta.template) {
			meta.template = "";
		}

		target.prototype.ElementMeta = meta;
		if (meta.selector) {
			customElements.define(meta.selector, target);
		}
		return target;
	};
}
