# Nested Menu Drawer

A fully accessible, animated drawer component for React/Next.js with nested navigation support, smooth transitions, and keyboard shortcuts.

> [!Note]
> Deployed : https://nested-drawer.milind.app

## Features

- Direction-aware navigation with smooth slide animations
- Automatic height transitions between menu levels
- Keyboard accessible (Tab, Escape, Cmd/Ctrl+K)
- Compound component pattern for flexible composition
- TypeScript support
- Built with Framer Motion and Tailwind CSS

## Usage

```tsx
import { NestedDrawer, TMenuItem } from "@/components/nested-drawer";

const menuData: TMenuItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Go to homepage",
    icon: <HomeIcon />,
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "products",
    title: "Products",
    description: "Browse products",
    icon: <PackageIcon />,
    children: [
      {
        id: "software",
        title: "Software",
        icon: <ServerIcon />,
        onClick: () => console.log("Software clicked"),
      },
    ],
  },
];

function App() {
  return (
    <NestedDrawer initialMenu={menuData}>
      <NestedDrawer.Trigger>Open Menu</NestedDrawer.Trigger>
      <NestedDrawer.Content title="Main Menu">
        <NestedDrawer.Menu />
      </NestedDrawer.Content>
    </NestedDrawer>
  );
}
```

## API

### NestedDrawer

Main container component.

- `initialMenu`: Array of menu items to display
- `children`: Compound components (Trigger, Content)

### TMenuItem

```ts
type TMenuItem = {
  id: string; // Unique identifier
  title: string; // Display text
  description?: string; // Optional subtitle
  icon?: React.ReactNode; // Optional icon
  children?: TMenuItem[]; // Nested menu items
  onClick?: () => void; // Action when clicked (leaf items)
};
```

### Components

- `NestedDrawer.Trigger`: Button to open the drawer
- `NestedDrawer.Content`: Drawer overlay and container
- `NestedDrawer.Menu`: Renders the current menu level

### Keyboard Shortcuts

- `Cmd+K` or `Ctrl+K`: Open drawer
- `Escape`: Go back one level or close drawer
- `Tab` / `Shift+Tab`: Navigate between items
- `Enter` / `Space`: Select item
