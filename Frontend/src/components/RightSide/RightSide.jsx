import React from 'react';
import New_Updates from '../newupdates/New_Updates';
import Review from '../Review/Review';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <New_Updates />
            </div>
            <div>
                <h3>Review</h3>
                <Review />

            </div>

        </div>

    )
}
export default RightSide