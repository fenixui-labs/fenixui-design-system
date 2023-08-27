import { ThemeVariantsProps, theme } from "./theme";
import { EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import React, { ReactNode, createContext, useMemo } from "react";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
	mode: ThemeVariantsProps.light,
});

type FenixProviderContextType = {
	emotionCache?: EmotionCache;
};

export const FenixProviderContext = createContext<FenixProviderContextType>({});

export type FenixProviderProps = {
	emotionCache?: EmotionCache;
	children: ReactNode;
};

export function FenixProvider({ emotionCache, children }: FenixProviderProps) {
	const snapshot = useSnapshot(state);

	const activeTheme = useMemo(() => theme(snapshot.mode), [snapshot.mode]);

	/*
	const handleOnChange = useCallback(() => {
		state.mode =
			snapshot.mode === ThemeVariantsProps.light
				? ThemeVariantsProps.dark
				: ThemeVariantsProps.light;
	}, [snapshot.mode]);
	*/

	return (
		<ThemeProvider theme={activeTheme}>
			<FenixProviderContext.Provider value={{ emotionCache }}>
				{children}
			</FenixProviderContext.Provider>
		</ThemeProvider>
	);
}
