import clsx from 'clsx';
import {
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

function Button({
  variant = 'primary',
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        'w-full h-11 flex-row items-center justify-center rounded-lg gap-2',
        {
          'bg-lime-300': variant === 'primary',
          'bg-zinc-800': variant === 'secondary',
        }
      )}
      disabled={isLoading}
      {...props}
    ></TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text className='text-white'>{children}</Text>;
}

Button.Title = Title;

export { Button };
