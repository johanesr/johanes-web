import clsx from 'clsx';
import { useState } from 'react';

function Bunka() {
    const [selectedCalculate, setSelectedCalculate] = useState(false);

    const [width, setWidth] = useState(0);
    const [thickness, setThickness] = useState(0);
    const [density, setDensity] = useState(7850);
    const [purchase, setPurchase] = useState(21000);
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
        <div className={clsx('flex items-center justify-center py-8 m-2')} /> 

        <div className={clsx('flex items-center justify-center py-8')}>
            <button type="button" className={clsx('button button--solid min-w-[1080px]', 'md:button--big')} onClick={setSelected}>
                {selectedCalculate ? "Calculate Price" : "Calculate Weight/Length"}
            </button>
        </div>
        <div className={clsx('flex flex-row items-center justify-center content-center py-2')}>
            <span className={clsx('button button--solid min-w-[250px]', 'md:button--big')}>Width (/mm)</span>
            <input type="number" className={clsx('bunka-input')} onChange={changeWidth}/>
        </div>
        <div className={clsx('flex flex-row items-center justify-center content-center py-2')}>
            <span className={clsx('button button--solid min-w-[250px]', 'md:button--big')}>Thickness (/mm)</span>
            <input type="number" className={clsx('bunka-input')} onChange={changeThickness}/>
        </div>
        <div className={clsx('flex flex-row items-center justify-center content-center py-2')}>
            <span className={clsx('button button--solid min-w-[250px]', 'md:button--big')}>Density (kg/m^3)</span>
            <input type="number" className={clsx('bunka-input')} onChange={changeDensity} value={density}/>
        </div>
        {
            selectedCalculate ?
            <div className={clsx('flex flex-row items-center justify-center content-center py-2')}>
                <span className={clsx('button button--solid min-w-[250px]', 'md:button--big')}>Harga Modal (Rp.)</span>
                <input type="number" className={clsx('bunka-input')} onChange={changePurchase} value={purchase}/>
            </div> : 
            <div className={clsx('flex flex-row items-center justify-center content-center py-2')}>
                <span className={clsx('button button--solid min-w-[250px]', 'md:button--big')}>Panjang/Berat (m/kg)</span>
                <input type="number" className={clsx('bunka-input')} onChange={changeVariableSize} value={variableSizeValue}/>
            </div>
        }
        {
            selectedCalculate ?
            <div className={clsx('flex items-center justify-center py-8')}>
                <button type="button" className={clsx('button button--solid min-w-[250px]', 'md:button--big')} onClick={handleCalculatePrice}>
                    Calculate Price
                </button>
            </div> :
            <div className={clsx('flex items-center justify-center py-8')}>
                <div className={clsx('flex items-center justify-center py-2 mr-10')}>
                    <button type="button" className={clsx('button button--solid min-w-[250px]', 'md:button--big')} onClick={handleCalculateLength}>
                        Calculate Length
                    </button>
                </div>
                <div className={clsx('flex items-center justify-center py-2')}>
                    <button type="button" className={clsx('button button--solid min-w-[250px]', 'md:button--big')} onClick={handleCalculateWeight}>
                        Calculate Weight
                    </button>
                </div>
            </div>
        }

        {selectedCalculate ? 
            <>
                <div className={clsx('flex flex-row items-center justify-center content-center py-8')}>
                    <span className={clsx('button button--solid min-w-[128px] mx-10', 'md:button--big')}>
                        DPP:
                    </span>
                    <span className={clsx('button button--solid min-w-[300px]', 'md:button--big')}>
                        RP. {Math.ceil(selling/1.11)}
                    </span>
                </div> 
                <div className={clsx('flex flex-row items-center justify-center content-center py-8')}>
                    <span className={clsx('button button--solid min-w-[128px] mx-10', 'md:button--big')}>
                        With PPN:
                    </span>
                    <span className={clsx('button button--solid min-w-[300px]', 'md:button--big')}>
                        RP. {Math.ceil(selling)}
                    </span>
                </div> 
            </>:
            <div>
                {isWeightSelected ?
                    <div className={clsx('flex flex-row items-center justify-center content-center py-8')}>
                        <span className={clsx('button button--solid min-w-[128px] mx-10', 'md:button--big')}>
                            {isWeightSelected && 'Weight'}
                        </span>
                        <span className={clsx('button button--solid min-w-[300px]', 'md:button--big')}>
                            {weightResult}
                        </span>
                    </div> :
                    <div className={clsx('flex flex-row items-center justify-center content-center py-8')}>
                        <span className={clsx('button button--solid min-w-[128px] mx-10', 'md:button--big')}>
                            Length:
                        </span>
                        <span className={clsx('button button--solid min-w-[300px]', 'md:button--big')}>
                            {lengthResult}
                        </span>
                    </div>
                }
                
                
            </div>
        }


    </>
    );
}

export default Bunka;
