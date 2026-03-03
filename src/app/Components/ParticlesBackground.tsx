'use client';
import {useEffect, useMemo, useState} from 'react';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import particleConfig from '../particles-config';
import {loadSlim} from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticlesBackground = () => {
  const [init, setInit] = useState<boolean>(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: any = useMemo(() => particleConfig, []);

  if (init) {
    return (
      <div className="fixed inset-0 pointer-events-none bg-black" style={{zIndex: -1}}>
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;
