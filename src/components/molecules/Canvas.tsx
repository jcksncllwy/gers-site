import { ContactlessOutlined } from '@mui/icons-material';
import { Box, BoxProps } from '@mui/system'
import React, { useRef, useEffect, RefObject } from 'react'

export type Props = {
    draw: (cref: HTMLCanvasElement, ctx: CanvasRenderingContext2D, fcount: number, time: number ) => any,
    canvasProps?: {
      [key: string]: any
    },
    boxProps?: BoxProps
};

export const Canvas = (props: Props) => {
  
  const { draw, canvasProps, boxProps } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const boxRef = useRef<HTMLElement>(null)

  useEffect(() => {
    
    const canvas = canvasRef.current!
    const box = boxRef.current!
    const handleResize = () => {
      console.log('RESIZE')
      const canvas = canvasRef.current!
      const box = boxRef.current!
      canvas.width = box.offsetWidth
      canvas.height = box.offsetHeight
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(box);

    const context = canvas.getContext('2d')!
    let frameCount = 0
    let animationFrameId: number;
    
    const render = (time: number) => {
      frameCount++
      draw(canvas, context, frameCount, time)
      animationFrameId = window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect();
    }
  }, [draw])
  
  return (
    <Box ref={boxRef} {...boxProps}>
      <canvas ref={canvasRef} {...canvasProps}/>
    </Box>
  )
}

export default Canvas