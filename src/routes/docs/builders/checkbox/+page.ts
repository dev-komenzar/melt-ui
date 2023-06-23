import type { PreviewProps } from '$routes/(components)';
import { Tailwind } from './(tailwind)';

import Example from './example.svelte';

export async function load() {
	return {
		preview: {
			component: Example,
			code: {
				Tailwind,
				CSS: null,
			},
		} satisfies PreviewProps,
	};
}
