import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

import PoiVideo from '@site/src/components/PoiVideo'; // Import PoiVideo component globally.
import PropertyIcon from '@site/src/components/PropertyIcon'; // Import PropertyIcon component globally.

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
  IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
  PoiVideo,
  PropertyIcon,
};