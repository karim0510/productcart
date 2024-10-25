// This is increase and decrease button group component

import Button from "./button";

interface groupProps {
    itemCount: number,
    handleDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const upDownButtonGroup = (props: groupProps) => {

    const {itemCount, handleDecrement, handleIncrement} = props;

    return (
        <div className="flex flex-row items-center gap-2">
            {itemCount > 1 ? <Button content="-" backgroundColor="sohoLights" width="6" height="6" onClick={handleDecrement}></Button> : <Button content="-" backgroundColor="plum" width="6" height="6" onClick={handleDecrement}></Button>}
            <div>{itemCount}</div>
            <Button content="+" backgroundColor="sohoLights" width="6" height="6" onClick={handleIncrement}></Button>
        </div>
    )
}

export default upDownButtonGroup;