# Grid

import { Steps } from "nextra/components";

## Overview

CSS Grid Layout is a comprehensive layout model introduced in CSS that enables developers to create two-dimensional layouts with rows and columns. It provides a powerful system for building complex, grid-based designs, offering precise control over the placement and sizing of elements within a container. CSS Grid is particularly useful for designing both simple and intricate layouts with efficiency.
## Flexbox Properties

<Steps>

### Display Property

- To enable CSS Grid, set the display property of the container to `grid`. 
- This transforms the container into a grid container, and its children become grid items.

### Flex Container Properties 

#### `grid-template-columns`

Defines the number and size of columns in the grid. It accepts values like pixel sizes, percentages, or fr units (fractional units).


#### `grid-template-rows`

Defines the number and size of rows in the grid. Similar to grid-template-columns, it defines the height of each row.

#### `gap`

Sets the gap (space) between grid items. It can be a single value for both rows and columns or separate values for rows and columns.

#### Example

```css
/* Example of Grid */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}

```

In this example, the `.positioned-box` class positions an element` 20 pixels down` and `50 pixels to the right` from its normal position.

- In this example, the `.grid-container` class creates a Grid container with three columns. - The columns have flexible widths, with the middle column taking twice as much space as the others. A 20px gap separates the grid items.

### Benefits of CSS Grid

#### Two-Dimensional Layouts
CSS Grid allows for the creation of complex two-dimensional layouts with rows and columns, providing more control than Flexbox.

#### Responsive Design
Well-suited for responsive design, enabling the easy rearrangement of elements based on different screen sizes.

#### Alignment and Justification
Provides precise control over the alignment and justification of items within the grid, both horizontally and vertically.

#### Automatic Item Placement
Grid items can be placed automatically using the auto-fill and auto-fit keywords, adapting to available space dynamically.

#### Grid Line Naming
Grid lines and areas can be named, making the code more readable and maintainable.

#### Grid Template Areas
Allows for the creation of visually intuitive layouts using named areas within the grid.

In conclusion, CSS Grid is a robust layout system that enhances the way web developers structure and present content. Its versatility and capabilities make it an essential tool for creating modern and responsive web layouts, providing a significant advancement in the field of web design.
</Steps>

