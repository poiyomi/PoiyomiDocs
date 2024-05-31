import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	startOnLoad: true,
    securityLevel: 'loose',
    theme: 'neutral',
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;