import React, {createContext, useEffect, useState} from "react";
import "../css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    let [count, setCount] = useState(0)

    const lokomotivStart = () => {
        setInterval(()=>{
            if (count === 4) {
                setCount(5)
                return
            } 
            document.getElementById(`station_${count+1}`).setAttribute("fill", "#dc3545")
            if (count === 3) document.getElementById(`station_1`).setAttribute("fill", "#fff")
            setCount(Number(count++))
        }, 1000);
    }

    const lokomotivPriem = () => {
        document.getElementById(`station_5`).setAttribute("fill", "#dc3545")
        document.getElementById(`station_4`).setAttribute("fill", "#fff")
    }

    const lokomotivNazad = () => {
        setInterval(()=>{
            if (count === 7) {
                document.getElementById(`station_1`).setAttribute("fill", "#dc3545")
                document.getElementById(`station_7`).setAttribute("fill", "#fff")
                return
            }
            console.log(count)
            document.getElementById(`station_${count+1}`).setAttribute("fill", "#dc3545")
            document.getElementById(`station_${count}`).setAttribute("fill", "#fff")
            setCount(Number(count++))
        }, 1000);
    }
//komaksur
    return (
        <>
        <svg class = ' align-items-center' width="1600.0000000000002" height="1200" xmlns="http://www.w3.org/2000/svg">
     
            <g>
            <title>background</title>
            <rect x="-1" y="-1" width="1602" height="1202" id="canvas_background" fill="#fff"/>
            <g id="canvasGrid" display="none">
                <rect id="svg_2" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)"/>
            </g>
            </g>
            <g>
            <title>Layer 1</title>
            <rect fill="#bcad23" stroke="#000" stroke-width="5" x="12.123576" y="568.564297" width="1572.896814" height="32.203706" id="svg_1"/>
            <rect fill="#bcad23" stroke-width="5" stroke-opacity="null" x="467.832143" y="321.114718" width="633.504352" height="26.301172" id="svg_3" stroke="#000"/>
            <rect fill="#bcad23" stroke-width="5" stroke-opacity="null" x="112.729643" y="447.218064" width="406.732146" height="25.423979" id="svg_6" transform="rotate(-39 316.09570312500017,459.9300537109375) " stroke="#000"/>
            <rect fill="#bcad23" stroke-width="5" stroke-opacity="null" x="1049.90855" y="447.242153" width="406.732146" height="25.423979" id="svg_7" stroke="#000" transform="rotate(39 1253.2746582031248,459.9541320800782) "/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="781.632046" cy="584.408601" id="station_3" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="577.330962" cy="584.408601" id="station_2" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="957.97614" cy="584.408601" id="station_4" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="1526.793369" cy="584.408601" id="station_5" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="88.083629" cy="584.408601" id="station_1" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="680.556773" cy="336.021493" id="station_7" rx="25.268817" ry="24.193548"/>
            <ellipse fill="#fff" stroke="#000" stroke-width="5" stroke-opacity="null" fill-opacity="null" cx="865.503018" cy="336.021493" id="station_6" rx="25.268817" ry="24.193548"/>
            <rect fill="#fbff0f" stroke="#000" stroke-width="5" x="139.158891" y="558.06452" width="56.989247" height="55.913978" id="svg_17"/>
            <rect fill="#fbff0f" stroke="#000" stroke-width="5" x="1377.868537" y="556.989249" width="56.989247" height="55.913978" id="svg_30"/>
            
            </g>
        </svg>

        <div class ='p-2 w-100 d-flex justify-content-around fon-men align-items-center'>

            <div class = "d-flex justify-content-around  align-items-center flex-column" >
                <div onClick={lokomotivStart} class = 'button-men'></div>
                <div onClick={lokomotivStart}>Прием состава на станцию</div>
            </div>
            <div class = "d-flex justify-content-around  align-items-center flex-column">
                <div onClick={lokomotivPriem} class = 'button-men'></div>
                <div onClick={lokomotivPriem}>Отцепка локомотива</div>  
            </div>
            <div class = "d-flex justify-coмntent-around  align-items-center flex-column">
                <div onClick={lokomotivNazad} class = 'button-men'></div>
                <div onClick={lokomotivNazad}>Маневр</div>
            </div>

        </div>
        </>
    )
}

export default Main