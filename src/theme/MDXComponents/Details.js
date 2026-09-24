import React from 'react';
import Details from '@theme-original/MDXComponents/Details';

// Docusaurus toggles the box on any click inside <summary>, which swallows clicks on links in it,
// like the "#" anchor link of a heading used as the summary (e.g. FAQ questions). Let links work instead.
function onSummaryClick(e) {
  const link = e.target.closest('a');
  if (link && e.currentTarget.contains(link)) {
    e.stopPropagation();
  }
}

export default function DetailsWrapper({ children, ...props }) {
  const items = React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type === 'summary'
      ? React.cloneElement(child, { onClick: onSummaryClick })
      : child,
  );
  return <Details {...props}>{items}</Details>;
}