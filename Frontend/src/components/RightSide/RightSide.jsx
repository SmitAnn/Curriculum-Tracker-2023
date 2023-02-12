import React from 'react';
import Review from '../Review/Review';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Review</h3>
                <Review />

            </div>

        </div>

    )
}
export default RightSide