import {useState , useRef, useEffect} from 'react'

const DrawingApp = () => {
    // refs for canvas and its 2dd contex 
    const canvasRef = useRef<HTMLCanvasElement>(null); 
    const contextRef = useRef<CanvasRenderingContext2D | null>(); 
    
    // state to see if its drawing or not 
    const [isDrawing , setIsDrawing] = useState <Boolean>(false) ;
    const [currentColor, setCurrentColor] = useState<string>('#000000');

    // set up canvas size and context on component mount 
    useEffect  (() => {
        const canvas = canvasRef.current; 
        if(!canvas) return // if not null return 

        canvas.width = window.innerWidth * 0.8; 
        canvas.height = window.innerHeight * 0.8 ;

        const context = canvas.getContext('2d');

        if (context){
            context.lineCap='square'; 
            context.lineWidth= 5; 
            contextRef.current = context
        }

     }, [])

     // event handlers for drawing 
        const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = nativeEvent;

        if(canvasRef.current) {
            const context = canvasRef.current.getContext('2d')
        
        if (context && contextRef.current) {
          context.beginPath();
          context.moveTo(offsetX, offsetY);
          contextRef.current.strokeStyle = currentColor; 
        }
        setIsDrawing(true);
      };}

     
      const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !canvasRef.current) return;
      
        const { offsetX, offsetY } = nativeEvent;
        const context = canvasRef.current.getContext('2d');
        if (context) {
          context.lineTo(offsetX, offsetY);
          context.stroke();
        }
      };
      
      const endDrawing = () => {
        if (canvasRef.current) {
          const context = canvasRef.current.getContext('2d');
          if (context) {
            context.closePath();
          }
        }
        setIsDrawing(false);
      };

      const handleColorChange = (newColor: string) => {
        setCurrentColor(newColor);
      };

  return (
    <div>

        <input
        type='color'
        placeholder='Change Color'
        value={currentColor}
        onChange={(e) => handleColorChange(e.target.value)}
        />
      <canvas 
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      style={{ border: '1px solid black' }}
      /> 

    </div>
  )
}

export default DrawingApp
