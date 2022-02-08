import { HStack, VStack, IVStackProps, IHStackProps} from 'native-base';
import { ReactChildren , cloneElement} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import uuid from 'react-native-uuid'
type MasonaryLayoutType = {
	navigation:StackNavigationProp<any>
	title: string
	doclink: string
	navigateTo: string
	_status:any
	_hStack:IHStackProps
	_vStack:IVStackProps
	column: unknown[]
	children: ReactChildren

}


export const MasonaryLayout = ({
	column,
	_hStack,
	_vStack,
	children,
	...props
}: MasonaryLayoutType) => {
	const vStackChildren = [];

	children.map(children, (child, cIndex) => {
		const pos = cIndex %  column.length;
		if (!vStackChildren[pos]) vStackChildren[pos] = [];
		// if (childrenLength - cIndex <= columnLength) {
		// 	vStackChildren[pos].push(cloneElement(child, { flex: 1 }));
		// } else {
		vStackChildren[pos].push(child);
		// }
	})

	const vstackTemplate = () => column.map((flexVal, index) => {
			vStackChildren[index][vStackChildren[index].length - 1] =
				cloneElement(
					vStackChildren[index][vStackChildren[index].length - 1],
					{ flex: 1 },
				);
			return (
				<VStack key={uuid.v4()} {..._vStack} flex={flexVal}>
					{vStackChildren[index]}
				</VStack>
			);
		});

	return <HStack {..._hStack}>{vstackTemplate()}</HStack>;
};
