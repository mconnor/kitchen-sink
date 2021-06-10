import React from 'react';
import { Button, Box } from 'native-base';
import { borderColor } from 'styled-system';

export const Example = () => {
	return (
		<Box
			// _text={{ color: 'white' }}
			p={4}
			rounded="lg"
			_light={{
				bg: 'cyan.300',
			}}
			_dark={{
				bg: 'cyan.400',
			}}
			position="relative"
			overflow="hidden"
		>
			<Box
				_light={{
					bg: 'cyan.500',
				}}
				_dark={{
					bg: 'cyan.700',
				}}
				rounded="full"
				size={20}
				left={5}
				top={-2}
				opacity={0.6}
				zIndex={-1}
				position="absolute"
			/>
			<Box
				_light={{
					bg: 'gray.600',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				rounded="lg"
				size={6}
			/>
		</Box>
	);
};
