# Positioning

import { Steps } from "nextra/components";

## Overview

Positioning in CSS determines how elements are placed on a webpage. It includes properties like position, top, right, bottom, and left. Understanding positioning is crucial for creating complex layouts and arranging elements precisely.

## Position Property Values

<Steps>

### Static

- Default positioning.
- Elements are positioned according to the normal flow of the document.

### Relative

- Positioned relative to its normal position.
- Allows using top, right, bottom, and left properties for adjustment.

### Absolute

- Removed from the normal flow of the document.
- Positioned relative to the nearest positioned ancestor (or the initial containing block if none).

### Fixed

- Positioned relative to the viewport.
- Remains fixed even when the page is scrolled.

### Sticky

- Acts like `relative` positioning until an element reaches a specified point during scrolling.

</Steps>

#### Example

```css
/* Example of Positioning */
.positioned-box {
  position: relative;
  top: 20px;
  left: 50px;
}
```

In this example, the `.positioned-box` class positions an element` 20 pixels down` and `50 pixels to the right` from its normal position.