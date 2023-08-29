import { ThemeVariantsProps, cssVarsTheme } from "./theme";
import { EmotionCache } from "@emotion/react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { ReactNode, createContext, useMemo } from "react";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
	mode: ThemeVariantsProps.light,
});

type FenixCssVarsProviderContextType = {
	emotionCache?: EmotionCache;
};

export const FenixCssVarsProviderContext =
	createContext<FenixCssVarsProviderContextType>({});

export type FenixCssVarsProviderProps = {
	emotionCache?: EmotionCache;
	children: ReactNode;
};

export function FenixCssVarsProvider({
	emotionCache,
	children,
}: FenixCssVarsProviderProps) {
	const snapshot = useSnapshot(state);

	const activeTheme = useMemo(
		() => cssVarsTheme(snapshot.mode),
		[snapshot.mode],
	);

	return (
		<CssVarsProvider theme={activeTheme}>
			<FenixCssVarsProviderContext.Provider value={{ emotionCache }}>
				{children}
			</FenixCssVarsProviderContext.Provider>
		</CssVarsProvider>
	);
}
