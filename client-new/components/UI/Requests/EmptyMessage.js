import React from 'react';

const EmptyMessageBox = ({toBeShown, message}) => {
    if (toBeShown) {
        return (
            <>
                {toBeShown && (<h3>{message}</h3>)}
            </>

        )
    }
    return (
        <div>
        </div>
    );
};

export default EmptyMessageBox;