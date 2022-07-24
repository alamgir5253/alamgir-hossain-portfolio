import Particles from "react-tsparticles";
import handleParticleConfig from "./Config/particlesConfig"

const Particlesbg = () => {
  return (
    <Particles params={handleParticleConfig}></Particles>
  );
};

export default Particlesbg;