import clsx from 'clsx';
import { createContext, useContext } from 'react';

import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Variants = 'primary' | 'secondary';

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

function Button({
  variant = 'primary',
  children,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          width: '100%',
          height: 44,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          gap: 2,
        },
        variant === 'primary' ? { backgroundColor: '#bef264' } : {},
        variant === 'secondary' ? { backgroundColor: '#27272a' } : {},
      ]}
      disabled={isLoading}
      activeOpacity={0.7}
      {...props}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className='text-lime-950' /> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext);

  return (
    <Text
      className={clsx('text-base, font-semibold', {
        'text-lime-950': variant === 'primary',
        'text-zinc-200': variant === 'secondary',
      })}
    >
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
