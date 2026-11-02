import { FaArrowRight } from 'react-icons/fa';

const NextStudySession = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white px-37.5 py-12.5 text-center space-y-4">
            <h2 className="text-3xl font-bold">Your next study session could be the one that sticks</h2>
            <p className="text-lg">Set your first goal in under two minutes. No credit card required.</p>
            <button className="btn bg-[#0e7c66] text-white">Start for free <FaArrowRight /></button>
        </div>
    );
};

export default NextStudySession;