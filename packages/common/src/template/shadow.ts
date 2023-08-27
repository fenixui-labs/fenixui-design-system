type ContextWithElementMeta = {
	elementMeta: {
		style: string;
		template: string;
	};
} & Element;

export function attachShadow(
	context: ContextWithElementMeta,
	options?: ShadowRootInit,
) {
	const shadowRoot: ShadowRoot = context.attachShadow(
		options || { mode: "open" },
	);
	const template = document.createElement("template");
	template.innerHTML = `<style>
       ${context.elementMeta.style}
       </style>
       ${context.elementMeta.template}`;
	shadowRoot.appendChild(template.content.cloneNode(true));
}
