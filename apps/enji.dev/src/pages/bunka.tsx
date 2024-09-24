import clsx from 'clsx';
import { useState } from 'react';

function Bunka() {
    const [selectedCalculate, setSelectedCalculate] = useState(false);

    const [width, setWidth] = useState(0);
    const [thickness, setThickness] = useState(0);
    const [density, setDensity] = useState(7850);
    const [purchase, setPurchase] = useState(20000);
    const [selling, setSelling] = useState(0);

    const [variableSizeValue, setVariableSizeValue] = useState(0)
    const [isWeightSelected, setIsWeightSelected] = useState(true)

    const [weightResult, setWeightResult] = useState(0)
    const [lengthResult, setLengthResult] = useState(0)

    const setSelected = () => {
        setSelectedCalculate(!selectedCalculate);
    }

    const changeWidth = (e) => {
        setWidth(e.target.value / 1000)
    }

    const changeThickness = (e) => {
        setThickness(e.target.value / 1000)
    }

    const changeDensity = (e) => {
        setDensity(e.target.value)
    }

    const changePurchase = (e) => {
        setPurchase(e.target.value)
    }

    const changeVariableSize = (e) => {
        setVariableSizeValue(e.target.value)
    }

    const handleCalculatePrice = () => {
        setSelling(width * thickness * density * purchase)
      }

    const handleCalculateWeight = () => {
        setIsWeightSelected(true)
    
        setWeightResult(variableSizeValue * thickness * density * width)
    }
    
    const handleCalculateLength = () => {
        setIsWeightSelected(false)
    
        setLengthResult(variableSizeValue / (thickness * density * width))
    }

    return (
    <>
        <div className={clsx('flex items-center justify-center py-8 m-10')} /> 

        <div className={clsx('flex items-center justify-center py-8')}>
            <button className={clsx('button button--solid min-w-[128px]', 'md:button--big')} onClick={setSelected}>
                {selectedCalculate ? "Calculate Price" : "Calculate Weight/Length"}
            </button>
        </div>
        <div className={clsx('flex flex-row items-center justify-center content-center py-8')}>
            <span className={clsx('button button--solid min-w-[128px]', 'md:button--big')}>Width</span>
            <input type="number" className={clsx('test')}/>
        </div>
        {/* <div className={clsx('flex items-center justify-center py-8')}>
            <span className={clsx('button button--solid min-w-[128px]', 'md:button--big')}>Thickness</span>
            <input type="text" />
        </div>
        <div className={clsx('flex items-center justify-center py-8')}>
            <span className={clsx('button button--solid min-w-[128px]', 'md:button--big')}>Density</span>
            <input type="text" />
        </div>

        {selectedCalculate ?
            <div className={clsx('flex items-center justify-center py-8')}>
                <span className={clsx('button button--solid min-w-[128px]', 'md:button--big')}>Selling Price</span>
                <input type="text" />
            </div> : 
            <div className={clsx('flex items-center justify-center py-8')}>
                <span className={clsx('button button--solid min-w-[128px]', 'md:button--big')}>Weight / Length</span>
                <input type="text" />
            </div> */}
        }
    </>
    );
}

export default Bunka;
