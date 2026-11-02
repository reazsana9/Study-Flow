import SectionHeader from './Shared/SectionHeader';
import HowItWorksCard from './Shared/HowItWorksCard';

const HowItWorks = () => {

    const steps = [
        {
            title: "Set a goal",
            description: "Finish Calculus II with an A. Big, specific, and yours."
        },
        {
            title: "Break it into daily tasks",
            description: "StudyFlow turns that goal into small tasks you can do today."
        },
        {
            title: "Watch your progress move",
            description: "Every task you check off fills the bar a little more.",
        },
        {
            title: "Celebrate your achievements",
            description: "This is the fourth step of the process.",
        },
        {
            title: "Reflect and improve",
            description: "This is the fifth step of the process.",
        },
        {
            title: "Share your success",
            description: "This is the sixth step of the process.",
        }
    ];
    return (
        <div className="container mx-auto py-17.5 space-y-4">
            <SectionHeader title={"How it works"} />
            <div className="grid grid-cols-3 gap-4">
                {
                    steps.map((step, index) => {
                        console.log(step, index);
                        return <HowItWorksCard key={index} index={index} step={step} />;
                    })}
            </div>
        </div>
    );
};

export default HowItWorks;