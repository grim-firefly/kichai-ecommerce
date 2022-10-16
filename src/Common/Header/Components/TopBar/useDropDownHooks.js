import { useEffect } from 'react';
export default function useDropDownHooks(ref, state, handler) {
	useEffect(() => {
		const listner = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		if (state) {
			document.addEventListener('mousedown', listner);
			return () => {
				document.removeEventListener('mousedown', listner);
			}
		}

	}, [ref, handler]);
}