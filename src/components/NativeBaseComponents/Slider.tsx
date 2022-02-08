import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => (
		<Slider defaultValue={70} colorScheme="fuchsia" w="80%">
			<Slider.Track>
				<Slider.FilledTrack />
			</Slider.Track>
			<Slider.Thumb />
		</Slider>
	);
