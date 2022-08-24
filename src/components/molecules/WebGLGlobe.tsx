import { Box, BoxProps } from '@mui/system'
import { useEffect, useRef, useState } from "react"
import Globe from 'react-globe.gl';
import * as THREE from 'three';

export type Props = {
    boxProps?: BoxProps,
};

type Dimensions = {
    width: number
    height: number
}

export const WebGLGlobe = ({boxProps}: Props) => {
    const [dimensions, setDimensions] = useState<Dimensions | null>(null);
    const boxRef = useRef<HTMLElement>(null);
    const globeEl = useRef();

    useEffect(() => {
        const globe = globeEl.current! as any;
        const box = boxRef.current!

        //Resizing
        const handleResize = () => {
            const box = boxRef.current!
            const globe = globeEl.current! as any;
            setDimensions({width: box.offsetWidth, height: box.offsetHeight})
        }
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(box);

        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.55;

        // Add clouds sphere
        const CLOUDS_IMG_URL = 'https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/clouds.png'; 
        const CLOUDS_ALT = 0.004;
        const CLOUDS_ROTATION_SPEED = -0.009; // deg/frame

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture: any) => {
            const clouds = new THREE.Mesh(
                new THREE.SphereBufferGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
                new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
            );
            globe.scene().add(clouds);

            (function rotateClouds() {
                clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
                requestAnimationFrame(rotateClouds);
            })();
        });
    }, []);

    return (
        <Box ref={boxRef} {...boxProps}>
            <Globe
                ref={globeEl}
                animateIn={true}
                width={dimensions?.width}
                height={dimensions?.height}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
        </Box>
    )

}