import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex; 
    padding: 10px;
    border: 5px solid black; 
    `;
const WorkoutListing = styled.div`
    display:flex; 
    justify-content: space-around; 
    Margin-right: 24px; 
`;
const Workouts = () => {
    return (
        <WrapperDiv>
            <WorkoutListing>Workout: <input /> </WorkoutListing>
            <WorkoutListing>Weight: <input /> </WorkoutListing>
            <WorkoutListing>Reps: <input /></WorkoutListing>
        </WrapperDiv>
    )
}
                                                                                                                                                                                                                                                                                                                   
export default Workouts; 