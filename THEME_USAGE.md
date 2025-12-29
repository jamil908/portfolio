# Dark/Light Mode Theme Implementation

## Overview
Your portfolio now has a complete dark/light mode theme system with smooth transitions and persistent user preferences.

## Features
- ✅ Automatic system preference detection
- ✅ Manual theme toggle with animated button
- ✅ Persistent theme preference (localStorage)
- ✅ Smooth transitions between themes
- ✅ Responsive design (works on mobile and desktop)
- ✅ Accessible theme toggle button

## How It Works

### Theme Context
The `ThemeContext` manages the global theme state and provides:
- Current theme (`light` or `dark`)
- `toggleTheme()` function
- `setTheme(theme)` function for manual control

### Theme Toggle Button
Located in the navbar, the theme toggle:
- Shows sun icon in light mode, moon icon in dark mode
- Smooth rotation animation when switching
- Available on both desktop and mobile

### CSS Variables
Your existing CSS variables in `index.css` automatically handle the color switching:
- Light mode: Clean, bright colors
- Dark mode: Dark backgrounds with light text

## Using Theme in Components

### Method 1: Using the useTheme Hook
```jsx
import { useTheme } from '../hooks/useTheme';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <button onClick={toggleTheme}>
        Current theme: {theme}
      </button>
    </div>
  );
};
```

### Method 2: Using Tailwind CSS Classes
The recommended approach is to use Tailwind's semantic color classes:

```jsx
const MyComponent = () => {
  return (
    <div className="bg-background text-foreground border border-border">
      <h1 className="text-primary">This automatically adapts to theme</h1>
      <p className="text-muted-foreground">Secondary text</p>
    </div>
  );
};
```

## Available Tailwind Color Classes

### Background Colors
- `bg-background` - Main background
- `bg-card` - Card backgrounds
- `bg-muted` - Muted backgrounds
- `bg-accent` - Accent backgrounds

### Text Colors
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `text-card-foreground` - Card text

### Border Colors
- `border-border` - Standard borders
- `border-input` - Input borders

### Interactive Colors
- `bg-primary text-primary-foreground` - Primary buttons
- `bg-secondary text-secondary-foreground` - Secondary buttons

## Customizing Colors

To customize the theme colors, edit the CSS variables in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;     /* Light mode background */
  --foreground: 0 0% 3.9%;     /* Light mode text */
  /* ... other variables */
}

.dark {
  --background: 0 0% 3.9%;     /* Dark mode background */
  --foreground: 0 0% 98%;      /* Dark mode text */
  /* ... other variables */
}
```

## Best Practices

1. **Use semantic classes**: Prefer `bg-background` over `bg-white`
2. **Test both themes**: Always check your components in both light and dark modes
3. **Smooth transitions**: The system includes automatic transitions for color changes
4. **Accessibility**: The theme toggle includes proper ARIA labels

## Browser Support
- Supports all modern browsers
- Gracefully falls back to light mode on older browsers
- Respects user's system preference by default