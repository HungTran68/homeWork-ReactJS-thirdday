import React from 'react';
import BoxItems from '../BoxItems/BoxItems';


const Content = () => {
    return (
        <div className="wrap-container">
            <div className="container-content">
                <div className="row">
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                </div>
                <div className="row">
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                    <div className="box-items-com">
                        <BoxItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;