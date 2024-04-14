import React from 'react';
import { Box, Typography } from '@mui/material';
import './Page.css'

const Thesis = () => {
    
    return (
        <div className="thesis">
            <Box className="page-box">
                <Typography variant="h1" component="h1">
                    The Math and the Matter: An Ethical Examination of Human Reliance on Algorithms
                </Typography>
                <br/>
                <Typography variant="h4" component="h4">Abstract:</Typography>
                <Typography variant="h5" component="p">
                    One of the largest issues surrounding the use of software-based algorithms,
                    specifically those used in decision-making processes, is their ability to become biased. Aside
                    from unconscious flaws, some argue that there are distinct human qualities important to
                    completing tasks—qualities that algorithms cannot replicate. So, the question arises: can we
                    fully rely on algorithms to stand in for humans? This thesis proposes a solution to help both
                    users and developers minimize and expose bias in decision-making processes with which
                    algorithms are involved. Research evaluates the severity of consequences resulting from
                    errors of algorithmic biases as well as various perceptions of algorithms and the discourse
                    surrounding their structure and function. My thesis begins by defining the algorithm and
                    understanding how they are developed. The thesis next differentiates between human and
                    algorithmic biases, discussing how algorithms may develop flaws in an attempt to locate
                    steps in the development process where errors can occur. I then speak to how an algorithm
                    can be considered “biased” and why it is important that we use algorithms to recognize
                    biases. Finally, I introduce the Farls Factor—a protocol stating that the amount of human
                    impact should be proportional to the amount of human involvement when implementing
                    algorithms in decision making processes—to determine the most effective way to minimize
                    bias and come to holistic conclusions.
                </Typography>
                <br/>
                <a href="https://drive.google.com/file/d/1iPiADtP_NKL903N7juZEKFZFQ5VF8ldp/view?usp=sharing" download>View PDF Here</a>
            </Box>
        </div>
    );
}

export default Thesis;
