import { useState, useEffect } from "react";

const useVisibility = (elementId) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById(elementId);
			if (element) {
				const rect = element.getBoundingClientRect();
				const viewportHeight =
					window.innerHeight || document.documentElement.clientHeight;
				const elementTop = rect.top;
				const elementBottom = rect.bottom;

				//it was: elementTop >= 0 && elementBottom <= viewportHeight
				// Check if both top and bottom edges are within the viewport's center region
				if (elementBottom <= viewportHeight / 1.3) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [elementId]);

	return isVisible;
};

export default useVisibility;
