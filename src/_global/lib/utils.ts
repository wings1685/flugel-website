export const sleep = (ms: number): Promise<number> => {
	return new Promise(resolve => {
		const timeoutID = window.setTimeout(() => resolve(timeoutID), ms);
	});
}

type PropsClass<T> = T & {
	class?: string,
	classList?: {
		[k: string]: boolean | undefined;
	};
};
export const propsClass = <T>(props: PropsClass<T>) => ({ [props.class!]: !!props.class, ...props.classList });

export const unescapeTag = (text: string) => text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
