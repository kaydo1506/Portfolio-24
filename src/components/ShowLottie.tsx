import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player
        autoplay
        loop
        src="https://lottie.host/85c6af74-a6c1-4ab9-bb73-c4a00ccbd5da/6cMoyRQGDp.json"
      ></Player>
    </div>
  );
};

export default ShowLottie;
