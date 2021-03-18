import { Composition } from "remotion";

import { HelloWorld } from "./HelloWorld";

const fps = 30;

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="HelloWorld"
			component={HelloWorld}
			durationInFrames={fps * 5}
			fps={fps}
			width={787}
			height={1092}
			defaultProps={{
				titleText: 'Welcome to abc test Remotion',
				titleColor: 'black',
			}}
		/>
	);
};
