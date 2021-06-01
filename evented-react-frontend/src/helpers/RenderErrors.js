import React, { Fragment } from 'react';

const RenderErrors = ({errors}) => {
    const content = () => {
        if (errors.length > 0) {
            return(
                <ul className="font-bold bg-orange-100 text-orange-700 p-4">
                    {errors.map(error => (<li key={error}>{error}</li>))}
                 </ul> 
            )
        }    
    }
    return (
        <Fragment>
            {content()}
        </Fragment>
    )
}

export default RenderErrors;
RenderErrors.defaultProps = {
    errors: null
};