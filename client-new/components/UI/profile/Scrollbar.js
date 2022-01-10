import React from "react";
import {Scrollbars} from 'react-custom-scrollbars-2';


export const Scrollbar = ({
                              children,
                              className,
                              options,
                              style,
                              ...props
                          }) => {
    return (
        <Scrollbars
            style={style}
            {...props}
        >
            {children}
        </Scrollbars>
    );
};
