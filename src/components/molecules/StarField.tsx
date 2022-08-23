import { SingleBed } from '@mui/icons-material';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import Canvas from './Canvas'

export const StarField = (props: BoxProps) => {

    const makeStars = (count: number) => {
        const out = [];
        for (let i = 0; i < count; i++) {
            const s = {
                x: Math.random() * 1600 - 800,
                y: Math.random() * 900 - 450,
                z: Math.random() * 1000,
                b: Math.random() * 255
            };
            out.push(s);
        }
        return out;
    };

    let stars = makeStars(10000);

    const moveStars = (distance: number, frameCount: number) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
            const s = stars[i];
            s.z -= distance;
            while (s.z <= 1) {
                s.z += 1000;
                s.x = Math.random() * 1600 - 800;
                s.y = Math.random() * 900 - 450;
                s.b = Math.random() * 255
            }
        }
    };

    const putPixel = (c: CanvasRenderingContext2D, x: number, y: number, rgbTint: number[], brightness: number) => {
        const intensity = brightness * 255;
        const rgb = "rgb(" + intensity*rgbTint[0] + "," +  intensity*rgbTint[1] + "," +  intensity*rgbTint[2] + ")";
        c.fillStyle = rgb;
        c.fillRect(x, y, 1, 1);
    }


    let prevTime: number;

    const draw = (cref: HTMLCanvasElement, c: CanvasRenderingContext2D, frameCount: number, time: number) => {
        if (!prevTime) prevTime = time;
        let elapsed = time - prevTime;
        prevTime = time;
        moveStars(elapsed * 0.1, frameCount);
        const [w, h] = [cref.getBoundingClientRect().width, cref.getBoundingClientRect().height]
        const [cx, cy] = [w*(5/8), h / 2]

        //Clear
        c.fillStyle = `rgba(0, 30, 60, 0.1)`;
        c.fillRect(0, 0, w, h);

        stars.forEach((star) => {
            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h) {
                return;
            }

            const d = star.z / 1000.0;
            const b = 1 - d * d;

            putPixel(c, x, y, [1,1,1], b);
        })
    }

    return (
        <Canvas draw={draw} boxProps={{...props}} />
    )
}

export default StarField